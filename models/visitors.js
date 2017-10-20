'use strict';
module.exports = function (sequelize, DataTypes) {
  var visitors = sequelize.define('visitors', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customData: {
      type: DataTypes.BLOB('long'),
      allowNull: true
    }
  }, {
      classMethods: {
        associate: function (models) {
          visitors.belongsTo(models.campaigns);
        }
      }
    });
  return visitors;
};