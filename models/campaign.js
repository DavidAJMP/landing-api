'use strict';
module.exports = function(sequelize, DataTypes) {
  var Campaign = sequelize.define('Campaign', {
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Campaign.hasMany(models.Visit);
        Campaign.hasMany(models.Visitor);
      }
    }
  });
  return Campaign;
};