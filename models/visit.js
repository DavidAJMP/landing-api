'use strict';
module.exports = function(sequelize, DataTypes) {
  var Visit = sequelize.define('Visit', {
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Visit;
};