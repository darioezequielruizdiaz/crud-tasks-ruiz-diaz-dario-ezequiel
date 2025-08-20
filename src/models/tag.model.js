import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Tag = sequelize.define(
  "tags", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }
);

export default Tag;