'use strict';
module.exports = function(sequelize, DataTypes) {
  var groupUser = sequelize.define('groupUser', {
    groupId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return groupUser;
};