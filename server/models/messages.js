'use strict';
module.exports = (sequelize, DataTypes) => {
  let messages = sequelize.define('messages', {
    messageId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    },
    groupId: {
    type:DataTypes.STRING,
    allowNull:false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return messages;
};