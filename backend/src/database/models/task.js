module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATEONLY,
      updated: DataTypes.DATEONLY,
    }, {
      underscore: true,
      tableName: 'tasks',
  });

  Task.associate = (model) => {
    Task.belongsTo(model.User, {
      as: 'users',
      foreignKey: 'userId'
    });
  };
  
  return Task;
};