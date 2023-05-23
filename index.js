require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");
const { setModelAssociations } = require("./models/dbModelAssociations");

const { bulkCreateUserAndPass } = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();
    setModelAssociations();
    bulkCreateUserAndPass();
  })
  .catch((err) => {
    console.error(err);
  });
