const Users = require('./Users');
const Topics = require('./Topics');
const Modules = require('./Modules');
const Comments = require('./Comments');

// modules have many topics
Modules.hasMany(Topics, {
  foreignKey: 'module_id',
});
// topics have one module
Topics.belongsTo(Modules, {
  foreignKey: 'module_id',
});
// users have many comments
Users.hasMany(Comments, {
  foreignKey: 'user_id',
});
// comments have one user and one topic
Comments.belongsTo(Users, {
  foreignKey: 'user_id',
});
// topics have many comments
Topics.hasMany(Comments, {
  foreignKey: 'topic_id',
});
Comments.belongsTo(Topics, {
  foreignKey: 'topic_id',
});

module.exports = { Users, Topics, Modules, Topics };