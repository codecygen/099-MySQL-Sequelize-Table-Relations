const { User, UserPass, UserPost, UserItem } = require("./dbModelAssociations");

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
      // User.hasOne(UserPass);
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
    // User.hasOne(UserPass);
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
    // User.hasOne(UserPass);
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
      // UserPass.belongsTo(User);
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
    // UserPass.belongsTo(User);
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
    // UserPass.belongsTo(User);
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

// Model-Association-for-hasOne-method
// hasOne associations
// User.hasOne(UserPass, { onDelete: "CASCADE" });
// onDelete: "CASCADE" makes it possible that
// when a User entry is deleted, associated UserPass will also
// be automatically be deleted.
const createAndDeleteOneUserPassAndUser = async () => {
  const newUser = {
    name: "natalie12121202",
    email: "natalie12121202@gmai.com",
  };

  const newUserPass = {
    password: "natalie12121202Pass",
  };

  try {
    const createdUserPass = await UserPass.create(newUserPass);
    // UserPass.belongsTo(User);
    const createdUser = await createdUserPass.createUser(newUser);

    console.log(createdUser.toJSON());
  } catch (err) {
    console.error(err);
  }

  try {
    // If the setting is like
    // User.hasOne(UserPass);
    // UserPass.belongsTo(User);
    // This will only delete User table,
    // associated UserPass table won't be deleted.
    // In order to set that up, it has to be set like
    // User.hasOne(UserPass, { onDelete: "CASCADE" });
    const deletedUser = await User.destroy({
      where: { name: "natalie12121202" },
    });
    console.log(deletedUser);
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-hasOne-method
const updateUserToUserPassForeignKey = async () => {
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
    // create Users and UserPasses
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdUserPasses = await UserPass.bulkCreate(bulkPassSet);

    // Associate foreign keys
    for (let i = 0; i < createdUserPasses.length; i++) {
      await createdUsers[i].setUserPass(createdUserPasses[i]);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    const foundUser = await User.findOne({ where: { name: "aras" } });
    const foundUserPass = await UserPass.findOne({
      where: { password: "jordanPass" },
    });

    // Model-Association-for-hasOne-method
    // hasOne-belongsTo-Difference-On-ForeignKeys
    // Here, "arasPass" will have no foreignKey and it will be set to null
    // but "jordanPass" will have the foreignKey of 1. Because hasOne relation
    // restricts child table to have only unique foreignKey.
    const result = await foundUser.setUserPass(foundUserPass);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-belongsTo-method
const updateUserPassToUserForeignKey = async () => {
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
    // create Users and UserPasses
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdUserPasses = await UserPass.bulkCreate(bulkPassSet);

    // Associate foreign keys
    for (let i = 0; i < createdUserPasses.length; i++) {
      await createdUsers[i].setUserPass(createdUserPasses[i]);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    const foundUser = await User.findOne({ where: { name: "aras" } });
    const foundUserPass = await UserPass.findOne({
      where: { password: "jordanPass" },
    });

    // Model-Association-for-belongsTo-method
    // hasOne-belongsTo-Difference-On-ForeignKeys
    // Here, "arasPass" and "jordanPass" will both
    // have the foreignKey of 1. Because belongsTo relation
    // can be used for one to many relations as well.
    const result = await foundUserPass.setUser(foundUser);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-hasMany-method-for-One-to-Many-Relation
const bulkCreateUserAndPost = async () => {
  const bulkUserSet = [
    {
      name: "hannah",
      email: "hannah@gmail.com",
    },
    {
      name: "william",
      email: "william@gmail.com",
    },
    {
      name: "donnah",
      email: "donnah@gmail.com",
    },
  ];

  const bulkPostSet = [
    {
      post: "When in Rome, do as the Romans.",
    },
    {
      post: "No man is an island.",
    },
    {
      post: "Fortune favors the bold.",
    },
    {
      post: "A picture is worth a thousand words.",
    },
    {
      post: "The early bird catches the worm.",
    },
  ];

  try {
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdPosts = await UserPost.bulkCreate(bulkPostSet);

    // Take only 2 posts
    const createdPostSample = [createdPosts[0], createdPosts[1]];

    // Model-Association-for-hasMany-method-for-One-to-Many-Relation
    // Associate these 2 posts to users
    // add+UserPost+s
    await createdUsers[0].addUserPosts(createdPostSample);

    const userHannah = await User.findOne({ where: { name: "hannah" } });
    // Model-Association-for-hasMany-method-for-One-to-Many-Relation
    // count+UserPost+s
    const totalPostForHannah = await userHannah.countUserPosts();

    // Output: There are total of 2 posts which are posted by hannah!
    console.log(
      `There are total of ${totalPostForHannah} posts that are posted by hannah!`
    );

    // It will find the first post
    const firstFoundPost = await UserPost.findOne();
    // removes the first post's association with hannah!
    // Only second post will be associated with hannah.
    // Model-Association-for-hasMany-method-for-One-to-Many-Relation
    // remove+UserPost
    await userHannah.removeUserPost(firstFoundPost);
  } catch (err) {
    console.error(err);
  }
};

// Model-Association-for-belongsToMany-method
const bulkCreateUserAndUserItem = async () => {
  const bulkUserSet = [
    {
      name: "terry",
      email: "terry123@gmail.com",
    },
    {
      name: "wendy",
      email: "wendy45@gmail.com",
    },
    {
      name: "johanna",
      email: "johanna98@gmail.com",
    },
  ];

  const bulkUserItemSet = [
    {
      item: "camera",
    },
    {
      item: "passport",
    },
    {
      item: "apartment",
    },
    {
      item: "printer",
    },
    {
      item: "microwave",
    },
    {
      item: "drill",
    },
  ];

  try {
    const createdUsers = await User.bulkCreate(bulkUserSet);
    await UserItem.bulkCreate(bulkUserItemSet);

    const foundUser = await User.findOne({ where: { name: "johanna" } });
    const allFoundUserItems = await UserItem.findAll();

    // Model-Association-for-belongsToMany-method
    // Associate all items to users
    // add+UserItem+s
    // user "johanna" will have all products, look at UsersAndUserItems table
    // user "johanna" has 3 as UserId
    // there are 6 different UserItemIds (1, 2, 3, 4, 5, 6)
    await foundUser.addUserItems(allFoundUserItems);

    const foundItem = await UserItem.findOne({ where: { item: "apartment" } });
    const allFoundUsers = await User.findAll();

    // Model-Association-for-belongsToMany-method
    // Associate all items to users
    // add+UserItem+s
    // item "apartment" will be owned by all users, look at UsersAndUserItems table
    // item "apartment" has 3 as UserItemId
    // there are 3 different UserIds (1, 2, 3)
    await foundItem.addUsers(allFoundUsers);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  bulkCreateUserAndPass,
  createOneUserAndPass,
  bulkCreatePassAndUser,
  createOnePassAndUser,
  createAndDeleteOneUserPassAndUser,
  updateUserToUserPassForeignKey,
  updateUserPassToUserForeignKey,
  bulkCreateUserAndPost,
  bulkCreateUserAndUserItem,
};
