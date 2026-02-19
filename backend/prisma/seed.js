require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcrypt");

const bosses = require("../src/controllers/utils/bosses");
const salesmans = require("../src/controllers/utils/salesmans");
const clients = require("../src/controllers/utils/clients");
const products = require("../src/controllers/utils/products");
const activities = require("../src/controllers/utils/activities");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Map seed data string values to Prisma enum keys
const methodMap = { "Correo-E": "CorreoE", "Llamada": "Llamada", "E-mail": "Email", "Call": "Call" };
const stateMap = { "Pendiente": "Pendiente", "Concretado": "Concretado", "Earring": "Earring", "Concretized": "Concretized" };

async function main() {
  const password = bcrypt.hashSync("12345", 10);

  for (let i = 0; i < bosses.length; i++) {
    const newBoss = await prisma.boss.upsert({
      where: { email: bosses[i].email },
      update: {},
      create: { ...bosses[i], password },
    });

    const productArr = products[i];
    const salesmanArr = salesmans[i];
    const activitiesArr = Object.values(activities)[i];

    // Create products for this boss
    const createdProducts = [];
    for (let w = 0; w < productArr.length; w++) {
      const newProduct = await prisma.product.create({
        data: { ...productArr[w], bossId: newBoss.id },
      });
      createdProducts.push(newProduct);
    }

    // Create salesmen for this boss
    for (let j = 0; j < salesmanArr.length; j++) {
      const salesmanData = {
        ...salesmanArr[j],
        bossId: newBoss.id,
        password,
      };
      const newSalesman = await prisma.salesman.upsert({
        where: { email: salesmanArr[j].email },
        update: {},
        create: salesmanData,
      });

      const clientArr = clients[j];

      // Create clients for this salesman
      for (let y = 0; y < clientArr.length; y++) {
        const newClient = await prisma.client.create({
          data: { ...clientArr[y], salesmanId: newSalesman.id },
        });

        // Create activities for this client
        const actividades = activitiesArr[y];
        for (let b = 0; b < actividades.length; b++) {
          const actData = { ...actividades[b] };
          actData.method = methodMap[actData.method] || actData.method;
          actData.state = stateMap[actData.state] || actData.state;
          const newActivity = await prisma.activity.create({
            data: {
              ...actData,
              to: clientArr[y].name,
              from: salesmanArr[j].name,
              salesmanId: newSalesman.id,
              clientId: newClient.id,
            },
          });

          // Create sale products for completed activities
          if (newActivity.state === "Concretado" && b < createdProducts.length) {
            await prisma.saleProduct.create({
              data: {
                quantity_sale: 1,
                price_sale: productArr[b].sale_price,
                activityId: newActivity.id,
                productId: createdProducts[b].id,
              },
            });
          }
        }
      }

      // Create feedbacks for this salesman
      for (let y = 0; y < clientArr.length; y++) {
        const score = Math.floor(Math.random() * 5) + 1;
        await prisma.feedback.create({
          data: { score, salesmanId: newSalesman.id },
        });
      }
    }
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
