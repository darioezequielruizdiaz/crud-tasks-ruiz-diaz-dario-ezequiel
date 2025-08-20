import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";

const Profile = sequelize.define(
    "profiles", {
        bio: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        }
    }
);

// Relacion uno a uno: User - Profile
User.hasOne(Profile, { foreignKey: "user_id" });
Profile.belongsTo(User, { foreignKey: "user_id" });

export default Profile;