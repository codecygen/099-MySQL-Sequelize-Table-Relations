const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");

// Model-Association-for-hasOne-method
// Except for this file, do not import models because the hasOne association
// is set in this file so the program knows where to put the foreign key
// "foreignKey" property changes default foreign key from "userId" to "userIDs"
User.hasOne(UserPass, { foreignKey: "userIDs" });

module.exports = {
  User, 
  UserPass
};
