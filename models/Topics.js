module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define("Topics", {
    name: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    topic_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Topics;
};