'use strict';
module.exports = (sequelize, DataTypes) => {
  let group = sequelize.define('group', {
    groupId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    },
    groupName: {
    type:DataTypes.STRING,
    allowNull:false,
    },
    messageId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return group;
};