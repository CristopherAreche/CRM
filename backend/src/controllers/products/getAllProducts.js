const prisma = require("../../prisma.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

const mapProduct = (product) => {
  const item = { ...product };
  const discount = (Number(item.sale_price) * Number(item.discount)) / 100;
  item.withDiscount = Number(item.sale_price) - discount;
  return item;
};

module.exports = async ({ bossId, page, limit, search }) => {
  if (!bossId) throw new Error("bossId required");

  const where = { bossId };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { category: { contains: search, mode: "insensitive" } },
    ];
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
  if (!hasPagination) {
    const products = await prisma.product.findMany(queryConfig);
    return products.map(mapProduct);
  }

  const paging = parsePagination(page, limit);

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.product.count({ where }),
  ]);

  return {
    data: products.map(mapProduct),
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};
