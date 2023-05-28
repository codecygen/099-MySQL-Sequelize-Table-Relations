const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");
const UserPost = require("./tables/userPostTable");
const UserItem = require("./tables/userItemTable");

// One-to-One-Relation
// Model-Association-for-hasOne-method
// This association enables methods like
// set+UserPass, get+UserPass, create+UserPass
// onDelete: "CASCADE" makes it possible that
// when a User entry is deleted, associated UserPass will also
// be automatically be deleted.
User.hasOne(UserPass, { onDelete: "CASCADE" });
// Alternatively
// onUpdate: "CASCADE ensures the foreignKey is updated accordingly in other table.
// User.hasOne(UserPass, { onUpdate: "CASCADE" });
// User.hasOne(UserPass);
// if you want foreignKey to be not the default "userId"
// User.hasOne(UserPass, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// User.hasOne(UserPass, { foreignKey: "userIDs" })
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Model-Association-for-belongsTo-method
// This association enables methods like
// set+User, get+User, create+User
// onDelete: "CASCADE" makes it possible that
// when a UserPass entry is deleted, associated User will also
// be automatically be deleted.
UserPass.belongsTo(User, { onDelete: "CASCADE" });
// Alternatively
// onUpdate: "CASCADE ensures the foreignKey is updated accordingly in other table.
// UserPass.belongsTo(User, { onUpdate: "CASCADE" });
// UserPass.belongsTo(User);
// if you want foreignKey to be not the default "userId"
// UserPass.belongsTo(User, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// UserPass.belongsTo(User, { foreignKey: "userIDs" });

// ===============================================================

// One-to-Many-Relation
// Model-Association-for-hasMany-method-for-One-to-Many-Relation
User.hasMany(UserPost, { onDelete: "CASCADE" });
// Model-Association-for-belongsTo-method-for-One-to-Many-Relation
UserPost.belongsTo(User, { onDelete: "CASCADE" });

// ===============================================================

// Many-to-Many-Relation
// Model-Association-for-belongsToMany-method
User.belongsToMany(UserItem, { through: "UsersAndItems", timestamps: false });
// Model-Association-for-belongsToMany-method
UserItem.belongsToMany(User, { through: "UsersAndItems", timestamps: false });

module.exports = {
  User,
  UserPass,
  UserPost,
  UserItem,
};
