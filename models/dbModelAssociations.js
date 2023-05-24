const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");

// "foreignKey" property changes default foreign key from "userId" to "userIDs"
User.hasOne(UserPass, { foreignKey: "userIDs" });

module.exports = {
  User, 
  UserPass
};
