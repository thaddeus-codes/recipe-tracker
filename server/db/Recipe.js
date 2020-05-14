const Sequelize = require("sequelize");
const db = require("./db");

const Recipe = db.define("recipe", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  instructions: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  content: {
    type: Sequelize.TEXT,
  },

  ingredients: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
});

module.exports = {
  Recipe,
};
