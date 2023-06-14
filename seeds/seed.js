const sequelize = require('../config/connection');
const { Users, Modules, Topics } = require('../models');

const moduleData = require('./moduleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //seed modules
  const users = await Modules.bulkCreate(moduleData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
