export default function (sequelize, DataTypes) {
  var Visit = sequelize.define(
    "Visit",
    {
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      classMethods: {
        associate: function (models) {
          Visit.belongsTo(models.Campaign);
        },
      },
    }
  );
  return Visit;
}
