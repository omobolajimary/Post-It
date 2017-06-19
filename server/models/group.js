
module.exports = (sequelize, DataTypes)=> {
  const group = sequelize.define('group', {
    groupName:{
    type:DataTypes.STRING,
    userId: DataTypes.INTEGER,
    allowNull: false,
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