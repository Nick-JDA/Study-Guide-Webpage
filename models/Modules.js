const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Modules extends Model {}

Modules.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'module',
  }
);

module.exports = Modules;
