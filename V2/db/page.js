export default function (sequelize, DataTypes) {
  var Page = sequelize.define(
    "Page",
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: function (models) {
          Page.belongsTo(models.Campaign);
        },
      },
    }
  );
  return Page;
}
