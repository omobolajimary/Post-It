module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    userName: DataTypes.STRINGEMAIL,
    Password: DataTypes.STRING
  }, {
    classMethods: {
    // associations can be defined here
      associate: (models) => {
        User.hasMany(models.Group, {
          foreignKey: 'userId',
          as: 'group',
        });
      }
    },
  });
  return User;
};