const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const UserPost = sequelize.define(
  "userPost",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    post: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserPost;
