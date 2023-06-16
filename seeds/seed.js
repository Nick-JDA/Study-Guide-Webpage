const sequelize = require('../config/connection');
const { Users, Modules, Topics, Comments } = require('../models');

const moduleData = require('./moduleData.json');
const topicData = require('./topicData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //seed modules
  const modules = await Modules.bulkCreate(moduleData, {
    individualHooks: true,
    returning: true,
  });
  const topics = await Topics.bulkCreate(topicData, {
    individualHooks: true,
    returning: true,
  });
  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const comments = await Comments.bulkCreate(commentData, {
    
  });
  process.exit(0);
};

seedDatabase();
