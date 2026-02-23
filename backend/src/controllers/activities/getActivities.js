const prisma = require("../../prisma.js");
const { unmapMethod, unmapState } = require("../utils/enumMaps.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

const unmapActivity = (act) => {
  if (!act) return act;
  return { ...act, method: unmapMethod(act.method), state: unmapState(act.state) };
};

module.exports = async ({ id, clientId, salesmanId, page, limit, search }) => {
  if (!id && !clientId && !salesmanId)
    throw new Error("id activity's, clientId or salesmanId required");

  if (id) {
    const activity = await prisma.activity.findUnique({ where: { id } });
    return unmapActivity(activity);
  }

  const where = {};
  if (clientId) where.clientId = clientId;
  if (salesmanId) where.salesmanId = salesmanId;

  if (search) {
    where.OR = [
      { message: { contains: search, mode: "insensitive" } },
      { subject: { contains: search, mode: "insensitive" } },
      { from: { contains: search, mode: "insensitive" } },
      { to: { contains: search, mode: "insensitive" } },
    ];
  }

  const queryConfig = {
    where,
    orderBy: { createdAt: "desc" },
  };

  const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
  if (!hasPagination) {
    const activity = await prisma.activity.findMany(queryConfig);
    return activity.map(unmapActivity);
  }

  const paging = parsePagination(page, limit);

  const [activity, total] = await Promise.all([
    prisma.activity.findMany({
      ...queryConfig,
      skip: (paging.page - 1) * paging.limit,
      take: paging.limit,
    }),
    prisma.activity.count({ where }),
  ]);

  return {
    data: activity.map(unmapActivity),
    meta: {
      total,
      page: paging.page,
      limit: paging.limit,
      totalPages: Math.max(1, Math.ceil(total / paging.limit)),
    },
  };
};
