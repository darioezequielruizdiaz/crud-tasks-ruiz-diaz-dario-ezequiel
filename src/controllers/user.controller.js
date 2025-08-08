import User from "../models/user.model.js";
import userValidator from "../validators/user.validator.js";

// Crear User
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const errores = userValidator({ name, email, password });
  
  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }
  
  try {

    const existingUser = await User.findOne({ where: { email } });
    
    if (existingUser) {
      return res.status(409).json({ error: "🚫 Ya esta registrado ese email 🚫" });
    }
    
    const user = await User.create({ name, email, password });
    return res.status(201).json(user);

  } catch (error) {

    return res.status(500).json({ error: err.message });

  }
};

// Obtener todos las Users
export const getAllUsers = async (req, res) => {
  try {

    const users = await User.findAll();
    return res.json(users);

  } catch (error) {

    return res.status(500).json({ error: error.message });

  }
};

// Obtener User por ID
export const getUserById = async (req, res) => {

  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  try {

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "❓ Usuario no encontrado ❓" });
    }
    return res.json(user);

  } catch (error) {

    return res.status(500).json({ error: error.message });
    
  }
};

// Actualizar User
export const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  const datosAActualizar = req.body;

  if (Object.keys(datosAActualizar).length === 0) {
    return res.status(400).json({ error: "🚫 No se enviaron datos para actualizar 🚫" });
  }

  const errores = userValidator(datosAActualizar, true);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const [updated] = await User.update(datosAActualizar, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: "❓ Usuario no encontrado ❓" });
    }

    const updatedUser = await User.findByPk(id);
    return res.json(updatedUser);

    } catch (error) {
    
    return res.status(500).json({ error: error.message });
  
    }
};

// Eliminar Task
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  try {
    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "❓ Usuario no encontrad0 ❓" });
    }

    return res.json({ message: "✅ Usuario eliminado ✅" });

  } catch (error) {

    return res.status(500).json({ error: err.message });

  }
};

// Funcion para validar el ID
const isValidId = (id) => {
  return !isNaN(Number(id)) && Number.isInteger(Number(id)) && Number(id) > 0;
};