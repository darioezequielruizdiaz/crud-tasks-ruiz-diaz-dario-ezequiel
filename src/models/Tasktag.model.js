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

// Dolor
TaskTag.belongsTo(Task, { 
    foreignKey: "task_id", 
    onDelete: "CASCADE",
    as: "task"
});
Task.hasMany(TaskTag, { 
    foreignKey: "task_id",
    onDelete: "CASCADE",
    as: "taskTags"
});

TaskTag.belongsTo(Tag, { 
    foreignKey: "tag_id",
    onDelete: "CASCADE",
    as: "tag"
});
Tag.hasMany(TaskTag, { 
    foreignKey: "tag_id",
    onDelete: "CASCADE",
    as: "taskTags"
});

export default TaskTag;