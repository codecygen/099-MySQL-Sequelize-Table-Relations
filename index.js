require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");
const { setModelAssociations } = require("./models/dbModelAssociations");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();
    setModelAssociations();
  })
  .catch((err) => {
    console.error(err);
  });
