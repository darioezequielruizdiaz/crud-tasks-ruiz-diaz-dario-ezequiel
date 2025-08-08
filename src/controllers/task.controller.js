import Task from "../models/task.model.js";
import taskValidator from "../validators/task.validator.js";

// Crear Taks
export const createTask = async (req, res) => {
  const { title, description, isComplete } = req.body;

  
  const errores = taskValidator({ title, description, isComplete });
  
  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }
  
  try {
    const existingTask = await Task.findOne({ where: { title } });
    
    if (existingTask) {
      return res.status(409).json({ error: "🚫 Ya existe una tarea con ese titulo 🚫" });
    }
    
    const task = await Task.create({ title, description, isComplete });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener todos las Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obtener Task por ID
export const getTaskById = async (req, res) => {

  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  try {

    const Task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "❓ Tarea no encontrada ❓" });
    }
    return res.json(task);

  } catch (error) {

    return res.status(500).json({ error: error.message });
    
  }
};

// Actualizar Task
export const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  const datosAActualizar = req.body;

  if (Object.keys(datosAActualizar).length === 0) {
    return res.status(400).json({ error: "🚫 No se enviaron datos para actualizar 🚫" });
  }

  const errores = taskValidator(datosAActualizar, true);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const [updated] = await Task.update(datosAActualizar, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: "❓ Tarea no encontrada ❓" });
    }

    const updatedTask = await Task.findByPk(id);
    return res.json(updatedTask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Eliminar Task
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "🚫 El ID debe ser un numero entero 🚫" });
  }

  try {
    const deleted = await Task.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "❓ Tarea no encontrada ❓" });
    }

    return res.json({ message: "✅ Tarea eliminada ✅" });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};

// Funcion para validar el ID
const isValidId = (id) => {
  return !isNaN(Number(id)) && Number.isInteger(Number(id)) && Number(id) > 0;
};