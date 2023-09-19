module.exports = (req, res, next) => {
  const { query } = req;
  const context = {};

  context.page = parseInt(query.page, 10) || 1;

  context.limit = parseInt(query.limit, 10) || 3;

  context.skip = (context.page - 1) * context.limit;

  context.searchTerm = query.q || "";

  context.search = new RegExp(context.searchTerm, "gi");

  req.context = context;

  next();
};
