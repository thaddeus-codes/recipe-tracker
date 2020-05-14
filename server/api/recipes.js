const express = require("express");
const router = express.Router();
const { Recipe } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll();
    res.send(recipes);
  } catch (error) {
    res.status(400).send("Error");
    next(error);
  }
});

module.exports = router;
