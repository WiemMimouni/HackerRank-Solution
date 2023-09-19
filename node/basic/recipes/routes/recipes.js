var recipes = require("../recipes.json");
var router = require("express").Router();

// Define the route to get paginated recipes
router.get("/", function (req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedRecipes = recipes.slice(startIndex, endIndex);

  res.json(paginatedRecipes);
});

module.exports = router;
