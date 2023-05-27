require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");

const {
  bulkCreateUserAndPass,
  createOneUserAndPass,
  bulkCreatePassAndUser,
  createOnePassAndUser,
  createAndDeleteOneUserPassAndUser,
  updateUserToUserPassForeignKey,
  updateUserPassToUserForeignKey,
  bulkCreateUserAndPost,
} = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();

    // await bulkCreateUserAndPass();
    // await createOneUserAndPass();
    // await bulkCreatePassAndUser();
    // await createOnePassAndUser();
    // await createAndDeleteOneUserPassAndUser();
    // await updateUserToUserPassForeignKey();
    // await updateUserPassToUserForeignKey();
    // await bulkCreateUserAndPost();
  })
  .catch((err) => {
    console.error(err);
  });
