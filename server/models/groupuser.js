
module.exports = (sequelize, DataTypes) =>{
  const groupUser = sequelize.define('groupUser', {
    groupId:{
      type:DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      allowNull:false
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