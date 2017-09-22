'use strict';
module.exports = function (sequelize, DataTypes) {
  var Visitor = sequelize.define('Visitor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
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