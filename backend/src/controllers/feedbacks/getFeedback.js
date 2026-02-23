const prisma = require("../../prisma.js");

const parsePagination = (page, limit) => {
  const parsedPage = Number.parseInt(page, 10);
  const parsedLimit = Number.parseInt(limit, 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : Math.max(1, parsedPage),
    limit: Number.isNaN(parsedLimit) ? 20 : Math.min(100, Math.max(1, parsedLimit)),
  };
};

module.exports = async ({ id = null, salesmanId = null, page, limit, search }) => {
  if (id !== null) {
    const feedback = await prisma.feedback.findUnique({ where: { id } });
    return feedback;
  }
  if (salesmanId !== null) {
    const where = { salesmanId };

    if (search && Number.isFinite(Number(search))) {
      where.score = Number(search);
    }

    const queryConfig = {
      where,
      orderBy: { createdAt: "desc" },
    };

    const hasPagination = page !== undefined || limit !== undefined || search !== undefined;
    if (!hasPagination) {
      return prisma.feedback.findMany(queryConfig);
    }

    const paging = parsePagination(page, limit);

    const [feedback, total] = await Promise.all([
      prisma.feedback.findMany({
        ...queryConfig,
        skip: (paging.page - 1) * paging.limit,
        take: paging.limit,
      }),
      prisma.feedback.count({ where }),
    ]);

    return {
      data: feedback,
      meta: {
        total,
        page: paging.page,
        limit: paging.limit,
        totalPages: Math.max(1, Math.ceil(total / paging.limit)),
      },
    };
  }
  throw new Error("FeedbackId(id) or salesmanId is undefined");
};
