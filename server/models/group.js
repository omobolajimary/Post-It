'use strict';
module.exports = function(sequelize, DataTypes) {
  var group = sequelize.define('group', {
    userId: DataTypes.STRING,
    groupName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return group;
};