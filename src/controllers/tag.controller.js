import Tag from "../models/tag.model.js";
import Task from "../models/task.model.js";

export const createTag = async (req, res) => {

    try {

        const { name } = req.body;
        const tag = await Tag.create({ name });
        return res.status(201).json(tag);

    } catch (error) {

        return res.status(500).json({ error: error.message });

    }
};

export const getAllTags = async (req, res) => {

    try {
        const tags = await Tag.findAll({
            include: { 
                model: Task, 
                attributes: ["id", "title"] 
            }
        });
        return res.json(tags);
        
    } catch (error) {
      
        return res.status(500).json({ error: error.message });

    }
};