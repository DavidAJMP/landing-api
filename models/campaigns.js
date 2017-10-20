'use strict';
module.exports = function(sequelize, DataTypes) {
  var campaigns = sequelize.define('campaigns', {
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    validThru: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        campaigns.hasMany(models.visits);
        campaigns.hasMany(models.visitors);
      }
    }
  });
  return campaigns;
};