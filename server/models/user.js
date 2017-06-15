module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    userName: {
    type:DataTypes.STRING,
    allowNull:false,
    },
    email:{
    type:DataTypes.STRING,
    allowNull:false,
    },
    Password: {
    type:DataTypes.STRING,
    allowNull:false,
    },
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