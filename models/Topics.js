const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Topics extends Model {}

Topics.init(
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
    module_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'module',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    examples: {
      type: DataTypes.STRING,
    },
    resources: {
      type: DataTypes.STRING,
    },
    video_link: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic',
  }
);

module.exports = Topics;
