'use strict';
module.exports = function(sequelize, DataTypes) {
  var visits = sequelize.define('visits', {
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        visits.belongsTo(models.campaigns);
      }
    }
  });
  return visits;
};