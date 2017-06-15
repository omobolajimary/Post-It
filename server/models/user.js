
module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    allowNull:false,
    },{
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
}, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        User.hasMany(models.messages, {
          foreignKey: "userId",
          onDelete: 'CASCADE',
        })
        User.hasMany(models.Group_user,{
          foreignKey: "userId",
          onDelete: 'CASCADE',
        });
      }
    }
  });
   User = sequelize.define('User', {
    surName: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
      }
    }
  });
  User = sequelize.define('User', {
    userName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
   User = sequelize.define('User', {
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
   User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};