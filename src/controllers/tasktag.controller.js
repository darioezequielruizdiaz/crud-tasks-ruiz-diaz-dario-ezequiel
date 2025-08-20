import Tag from "../models/tag.model.js";
import Task from "../models/task.model.js";
import TaskTag from "../models/Tasktag.model.js";

export const createTaskTag = async (req, res) => {
  const { task_id, tag_id } = req.body;

  if (!task_id || !tag_id) {
    return res.status(400).json({ error: "🚫 task_id y tag_id son requeridos 🚫" });
  }

  try {
    const relation = await TaskTag.create({ task_id, tag_id });
    return res.status(201).json(relation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllTaskTags = async (req, res) => {
  try {
    const relations = await TaskTag.findAll({
      include: [
        { model: Task, attributes: ["id", "title"] },
        { model: Tag, attributes: ["id", "name"] }
      ]
    });
    return res.json(relations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};