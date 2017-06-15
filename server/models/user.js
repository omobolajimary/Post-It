module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email:DataTypes.STRING,
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