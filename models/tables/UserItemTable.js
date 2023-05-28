const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const UserItem = sequelize.define(
  "UserItem",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    item: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserItem;