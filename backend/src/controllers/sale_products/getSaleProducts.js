const prisma = require("../../prisma.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

module.exports = async ({ id, activityId, page, limit, search }) => {
  if (!id && !activityId)
    throw new Error("(id) sale_product or activityId required");

  if (id) {
    const sale_product = await prisma.saleProduct.findUnique({ where: { id } });
    return sale_product;
  }

  const where = { activityId };

  if (search) {
    where.product = {
      name: { contains: search, mode: "insensitive" },
    };
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
  if (!hasPagination) {
    return prisma.saleProduct.findMany(queryConfig);
  }

  const paging = parsePagination(page, limit);

  const [allSaleProducts, total] = await Promise.all([
    prisma.saleProduct.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.saleProduct.count({ where }),
  ]);

  return {
    data: allSaleProducts,
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};
