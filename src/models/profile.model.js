import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

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

export default Profile;