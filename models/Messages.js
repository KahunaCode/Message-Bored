module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    body: DataTypes.STRING,
    topic_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Messages;
};