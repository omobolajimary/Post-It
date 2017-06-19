
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    messageBody: {
      type: DataTypes.TEXT,
      groupId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return message;
};