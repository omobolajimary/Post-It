'use strict';
module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    groupId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return message;
};