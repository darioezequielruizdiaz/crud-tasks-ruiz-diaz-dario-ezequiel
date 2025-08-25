import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import Task from "./task.model.js";

const User = sequelize.define(
    "users", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }
)

// Relacion uno a muchos: User - Task
User.hasMany(Task, { 
    foreignKey: "user_id",
    onDelete: "CASCADE",
    as: "task"
 });
Task.belongsTo(User, { 
    foreignKey: "user_id",
    as: "user" 
});

export default User;