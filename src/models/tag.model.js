import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Tag = sequelize.define("tags", {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
});

const TaskTag = sequelize.define("task_tags", {
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export { Tag, TaskTag };