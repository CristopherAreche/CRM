const prisma = require("../../prisma.js");
const { unmapState } = require("../utils/enumMaps.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

const buildClientSummary = (client) => {
  const activities = client.activities || [];
  const lastActivity = activities.length ? activities[0] : null;
  const status = lastActivity ? unmapState(lastActivity.state) : "Pendiente";

  let totalPurchased = 0;
  const categoryCounter = {};

  activities.forEach((activity) => {
    (activity.saleProducts || []).forEach((sale) => {
      totalPurchased += sale.quantity_sale * Number(sale.price_sale);
      const category = sale.product?.category || "Sin categoria";
      categoryCounter[category] = (categoryCounter[category] || 0) + 1;
    });
  });

  const maxCategoryCount = Math.max(0, ...Object.values(categoryCounter));
  const categories =
    maxCategoryCount === 0
      ? []
      : Object.keys(categoryCounter).filter(
          (category) => categoryCounter[category] === maxCategoryCount
        );

  return {
    id: client.id,
    name: client.name,
    email: client.email,
    phone: client.phone,
    vip: client.vip,
    enable: client.enable,
    salesmanId: client.salesmanId,
    createdAt: client.createdAt,
    updatedAt: client.updatedAt,
    status,
    totalPurchased,
    categories,
  };
};

module.exports = async ({ salesmanId, bossId, page, limit, search }) => {
  if (!salesmanId && !bossId) throw new Error("salesmanId or bossId required");

  const where = {};

  if (salesmanId) {
    where.salesmanId = salesmanId;
  } else {
    where.salesman = { bossId };
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { phone: { contains: search, mode: "insensitive" } },
    ];
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
    include: {
      activities: {
        orderBy: { createdAt: "desc" },
        include: {
          saleProducts: {
            select: {
              quantity_sale: true,
              price_sale: true,
              product: { select: { category: true } },
            },
          },
        },
      },
    },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;

  if (!hasPagination) {
    const allClients = await prisma.client.findMany(queryConfig);
    return allClients.map(buildClientSummary);
  }

  const paging = parsePagination(page, limit);

  const [clients, total] = await Promise.all([
    prisma.client.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.client.count({ where }),
  ]);

  return {
    data: clients.map(buildClientSummary),
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};
