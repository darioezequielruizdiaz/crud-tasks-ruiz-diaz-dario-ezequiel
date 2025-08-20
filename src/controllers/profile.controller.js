import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";

export const createProfile = async (req, res) => {

    const { bio, user_id } = req.body;

    if (!user_id) return res.status(400).json({ error: "🚫 user_id es requerido 🚫" });

    try {
        
        const user = await User.findByPk(user_id);
        if (!user) return res.status(404).json({ error: "🚫 Usuario no encontrado 🚫" });
        
        const profile = await Profile.create({ bio, user_id });
        return res.status(201).json(profile);
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

export const getAllProfiles = async (req, res) => {

    try {

        const profiles = await Profile.findAll({
          include: { 
            model: User, 
            attributes: ["id", "name", "email"] 
        }});
        return res.json(profiles);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};