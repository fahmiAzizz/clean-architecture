const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const DataModel = sequelize.define('Data', {
  dataId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dataName: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  
}, {
    paranoid: true
});

module.exports = DataModel;
