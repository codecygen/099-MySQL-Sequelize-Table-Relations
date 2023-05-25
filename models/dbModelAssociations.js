const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");

// Model-Association-for-hasOne-method
// Except for this file, do not import models because the hasOne association
// is set in this file so the program knows where to put the foreign key
// "foreignKey" property changes default foreign key from "userId" to "userIDs"
// This enables methods like set+UserPass, get+UserPass, create+UserPass
// in hasOne, second argument is optional.
// Alternatively
// User.hasOne(UserPass, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
User.hasOne(UserPass, { foreignKey: "userIDs" });
// Having both associations enables you to perform operations like 
// retrieving a user's associated UserPass record or retrieving a 
// User based on a UserPass record, depending on your application's 
// requirements and data access patterns.
// in belongsTo, second argument is optional.
// Alternatively
// UserPass.belongsTo(User, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
UserPass.belongsTo(User, { foreignKey: "userIDs" });

module.exports = {
  User,
  UserPass,
};
