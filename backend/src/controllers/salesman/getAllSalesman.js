const prisma = require("../../prisma.js");
const customSalesman = require("./customSalesman.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

const getAllSalesman = async (data) => {
  const {
    id,
    name,
    address,
    email,
    phone,
    enable,
    bossId,
    page,
    limit,
    search,
  } = data;

  if (id) {
    const salesman = await prisma.salesman.findUnique({
      where: { id },
      include: {
        feedbacks: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });

    if (!salesman) return null;
    return customSalesman(salesman);
  }

  if (name || address || email || phone || enable) {
    const variable = name || address || email || phone || enable;
    const [property] = Object.keys({ name, address, email, phone, enable }).filter(
      (key) => data[key] !== undefined
    );

    const allSalesman = await prisma.salesman.findMany({
      where: {
        bossId,
        [property]: variable,
      },
      include: {
        feedbacks: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });

    const result = await Promise.all(allSalesman.map((salesman) => customSalesman(salesman)));
    return result[0];
  }

  const where = { bossId };
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { phone: { contains: search, mode: "insensitive" } },
      { address: { contains: search, mode: "insensitive" } },
    ];
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
    include: {
      feedbacks: {
        orderBy: { createdAt: "desc" },
        take: 50,
      },
    },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
  if (!hasPagination) {
    const allSalesman = await prisma.salesman.findMany(queryConfig);
    return Promise.all(allSalesman.map((salesman) => customSalesman(salesman)));
  }

  const paging = parsePagination(page, limit);

  const [allSalesman, total] = await Promise.all([
    prisma.salesman.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.salesman.count({ where }),
  ]);

  const mapped = await Promise.all(allSalesman.map((salesman) => customSalesman(salesman)));

  return {
    data: mapped,
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};

module.exports = getAllSalesman;
