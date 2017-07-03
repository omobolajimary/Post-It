
module.exports = (sequelize, DataTypes)=> {
  const group = sequelize.define('group', {
    groupName:DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return group;
};