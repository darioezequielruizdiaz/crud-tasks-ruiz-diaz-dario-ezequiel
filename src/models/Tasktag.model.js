import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import Task from "./task.model.js";
import Tag from "./tag.model.js";

const TaskTag = sequelize.define(
    "task_tags", {
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

// Relacion muchos a muchos: Task - Tag
Task.belongsToMany(Tag, { through: TaskTag, foreignKey: "task_id" });
Tag.belongsToMany(Task, { through: TaskTag, foreignKey: "tag_id" });

export default TaskTag;