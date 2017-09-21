
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  });
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: "author_id",
      as: "Author"
    });
    Message.belongsTo(models.Topic, {
      foreignKey: "topic_id",
      as: "topicName"
    });
  };

  return Message;
};


// module.exports = function(sequelize, DataTypes) {
//   var Messages = sequelize.define("Messages", {
//     body: DataTypes.STRING,
//     topic_id: DataTypes.INTEGER,
//     author_id: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function(models) {
//       }
//     }
//   });
//   return Messages;
// };