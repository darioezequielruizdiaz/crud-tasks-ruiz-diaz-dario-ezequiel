import User from "./user.model.js";
import Task from "./task.model.js";

// Relacion uno a muchos: User - Task
User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id" });

export {
  User,
  Task
};