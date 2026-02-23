const prisma = require("../../prisma.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

module.exports = async ({ id, clientId, salesmanId, page, limit, search }) => {
  if (!id && !clientId && !salesmanId)
    throw new Error("id task's, clientId or salesmanId required");

  if (id) {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }

  const where = {};
  if (clientId) where.clientId = clientId;
  if (salesmanId) where.salesmanId = salesmanId;

  if (search) {
    where.OR = [
      { description: { contains: search, mode: "insensitive" } },
      { state: { contains: search, mode: "insensitive" } },
    ];
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
  if (!hasPagination) {
    return prisma.task.findMany(queryConfig);
  }

  const paging = parsePagination(page, limit);

  const [task, total] = await Promise.all([
    prisma.task.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.task.count({ where }),
  ]);

  return {
    data: task,
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};
