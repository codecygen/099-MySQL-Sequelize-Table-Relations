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
  bulkCreateUserAndUserItem,
} = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();

    // =============== One-to-One-Relation ===============
    // -------- Model-Association-for-hasOne-method --------
    // await bulkCreateUserAndPass();
    // await createOneUserAndPass();
    
    // -------- Model-Association-for-belongsTo-method --------
    // await bulkCreatePassAndUser();
    // await createOnePassAndUser();

    //  -------- Model-Association-for-hasOne-method --------
    // await createAndDeleteOneUserPassAndUser();

    //  -------- Model-Association-for-hasOne-method --------
    // await updateUserToUserPassForeignKey();

    // -------- Model-Association-for-belongsTo-method --------
    // await updateUserPassToUserForeignKey();

    // ===================================================
    // =============== One-to-Many-Relation ==============

    // -------- Model-Association-for-hasMany-method-for-One-to-Many-Relation --------
    // await bulkCreateUserAndPost();

    // ===================================================
    // ============== Many-to-Many-Relation ==============

    // -------- Model-Association-for-belongsToMany-method --------
    // await bulkCreateUserAndUserItem();

    // ===================================================
  })
  .catch((err) => {
    console.error(err);
  });
