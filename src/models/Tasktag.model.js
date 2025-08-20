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

// 👇 Asociaciones directas
TaskTag.belongsTo(Task, { foreignKey: "task_id" });
Task.hasMany(TaskTag, { foreignKey: "task_id" });

TaskTag.belongsTo(Tag, { foreignKey: "tag_id" });
Tag.hasMany(TaskTag, { foreignKey: "tag_id" });

export default TaskTag;