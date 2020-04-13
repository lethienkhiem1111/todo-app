module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task: {
      type: Sequelize.STRING
    },
    completed: {
      type: Sequelize.BOOLEAN
    }
  });

  return Todo;
};
