'use strict';
module.exports = (sequelize, DataTypes)=>{
  let groupUser = sequelize.define('groupUser', {
    groupId:{
     type:DataTypes.INTEGER,
    },
    message: {
      type:DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return groupUser;
};