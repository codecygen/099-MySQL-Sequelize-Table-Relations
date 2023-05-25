const { User, UserPass } = require("./dbModelAssociations");

// Model-Association-for-hasOne-method
// hasOne associations
// set+UserPass, get+UserPass methods
const bulkCreateUserAndPass = async () => {
  const bulkUserSet = [
    {
      name: "aras",
      email: "aras@gmail.com",
    },
    {
      name: "jordan",
      email: "jordan12@gmail.com",
    },
    {
      name: "jason",
      email: "jason341@gmail.com",
    },
  ];

  const bulkPassSet = [
    {
      password: "arasPass",
    },
    {
      password: "jordanPass",
    },
    {
      password: "jasonPass",
    },
  ];

  try {
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdUserPasses = await UserPass.bulkCreate(bulkPassSet);

    for (let i = 0; i < createdUserPasses.length; i++) {
      // set+UserPass is coming from the model name, sequelize automatically
      // creates this method so that these 2 models can be associated.
      // It is enabled with
      // User.hasOne(UserPass, { foreignKey: "userIDs" });
      // Because hasOne method is put in front of User, any User model related
      // data can use set+UserPass method. hasOne hooks UserPass model
      // to User model so that a User can be associated with UserPass by using
      // this method.
      await createdUsers[i].setUserPass(createdUserPasses[i]);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    const foundUser = await User.findOne({ where: { name: "aras" } });
    // get+UserPass is coming from the model, sequelize automatically
    // creates this method so that these 2 models can be associated.
    // It is enabled with
    // User.hasOne(UserPass, { foreignKey: "userIDs" });
    // Because hasOne method is put in front of User, any User model related
    // data can use get+UserPass method. hasOne hooks UserPass model
    // to User model so that a User can be associated with UserPass by using
    // this method.
    const foundUserPass = await foundUser.getUserPass();

    // This should show the foundUserPass
    console.log(foundUserPass.toJSON());
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-hasOne-method
// hasOne associations
// create+UserPass method
const createOneUserAndPass = async () => {
  const newUser = {
    name: "james",
    email: "james2@gmai.com",
  };

  const newUserPass = {
    password: "jamesPass",
  };

  try {
    const createdUser = await User.create(newUser);
    // create+UserPass is coming from the model, sequelize automatically
    // creates this method so that these 2 models can be associated.
    // It is enabled with
    // User.hasOne(UserPass, { foreignKey: "userIDs" });
    // Because hasOne method is put in front of User, any User model related
    // data can use create+UserPass method. hasOne hooks UserPass model
    // to User model so that a User can be associated with UserPass by using
    // this method.
    const createdUserPass = await createdUser.createUserPass(newUserPass);

    console.log(createdUserPass.toJSON());
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-belongsTo-method
// belongsTo associations
// set+User, get+User methods
const bulkCreatePassAndUser = async () => {
  const bulkUserSet = [
    {
      name: "aras",
      email: "aras@gmail.com",
    },
    {
      name: "jordan",
      email: "jordan12@gmail.com",
    },
    {
      name: "jason",
      email: "jason341@gmail.com",
    },
  ];

  const bulkPassSet = [
    {
      password: "arasPass",
    },
    {
      password: "jordanPass",
    },
    {
      password: "jasonPass",
    },
  ];

  try {
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdUserPasses = await UserPass.bulkCreate(bulkPassSet);

    for (let i = 0; i < createdUsers.length; i++) {
      // set+User is coming from the model name, sequelize automatically
      // creates this method so that these 2 models can be associated.
      // It is enabled with
      // UserPass.belongsTo(User, { foreignKey: "userIDs" });
      // Because belongsTo method is put in front of UserPass,
      // any UserPass model related
      // data can use set+User method. belongsTo hooks User model
      // to UserPass model so that a User can be associated with UserPass by using
      // this method.
      await createdUserPasses[i].setUser(createdUsers[i]);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    const foundUserPass = await UserPass.findOne({
      where: { password: "arasPass" },
    });
    // get+User is coming from the model, sequelize automatically
    // creates this method so that these 2 models can be associated.
    // It is enabled with
    // UserPass.belongsTo(User, { foreignKey: "userIDs" });
    // Because belongsTo method is put in front of UserPass,
    // any UserPass model related
    // data can use get+User method. belongsTo hooks User model
    // to UserPass model so that a User can be associated with UserPass by using
    // this method.
    const foundUser = await foundUserPass.getUser();

    // This should show the foundUserPass
    console.log(foundUser.toJSON());
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-belongsTo-method
// belongsTo associations
// create+User method
const createOnePassAndUser = async () => {
  const newUser = {
    name: "james",
    email: "james2@gmai.com",
  };

  const newUserPass = {
    password: "jamesPass",
  };

  try {
    const createdUserPass = await UserPass.create(newUserPass);
    // create+User is coming from the model, sequelize automatically
    // creates this method so that these 2 models can be associated.
    // It is enabled with
    // UserPass.belongsTo(User, { foreignKey: "userIDs" });
    // Because belongsTo method is put in front of UserPass,
    // any UserPass model related
    // data can use create+User method. belongsTo hooks User model
    // to UserPass model so that a User can be associated with UserPass by using
    // this method.
    const createdUser = await createdUserPass.createUser(newUser);

    console.log(createdUser.toJSON());
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  bulkCreateUserAndPass,
  createOneUserAndPass,
  bulkCreatePassAndUser,
  createOnePassAndUser,
};
