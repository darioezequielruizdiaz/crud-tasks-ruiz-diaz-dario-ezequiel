import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define(
    "tasks", {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

export default Task;