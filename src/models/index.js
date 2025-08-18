import User from "./user.model.js";
import Task from "./task.model.js";
import Profile from "./profile.model.js";
import { Tag, TaskTag } from "./tag.model.js"

// Relacion uno a muchos: User - Task
User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id" });

// Relacion uno a uno: User - Profile
User.hasOne(Profile, { foreignKey: "user_id" });
Profile.belongsTo(User, { foreignKey: "user_id" });

// Relacion muchos a muchos: Task - Tag
Task.belongsToMany(Tag, { through: TaskTag, foreignKey: "task_id" });
Tag.belongsToMany(Task, { through: TaskTag, foreignKey: "tag_id" });


export {
  User,
  Task,
  Profile,
  Tag,
  TaskTag
};