'use strict';
module.exports = function (sequelize, DataTypes) {
  var Visitor = sequelize.define('Visitor', {
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
          Visitor.belongsTo(models.Campaign);
        }
      }
    });
  return Visitor;
};