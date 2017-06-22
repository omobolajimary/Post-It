module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.Message, {foreignKey: 'user_id'});

        // User.hasMany(models.Group_member, {foreignKey: 'user_id'});
      }
    }
  });
  return user;
};