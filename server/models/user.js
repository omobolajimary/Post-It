
module.exports = (sequelize, DataTypes) =>{
  var user = sequelize.define('user', {
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
        user.hasMany(models.messages, {
          foreignKey: "userId",
          onDelete: 'CASCADE',
        })
      }
    }
  });
   var user = sequelize.define('user', {
    surName: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
      }
    }
  });
   var user = sequelize.define('user', {
    userName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
   var user = sequelize.define('user', {
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
   var user = sequelize.define('user', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};