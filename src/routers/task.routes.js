import { Router } from "express";
const routerTask = Router();
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";

routerTask.get("/tasks", getAllTasks);
routerTask.get("/tasks/:id", getTaskById);
routerTask.post("/tasks", createTask);
routerTask.put("/tasks/:id", updateTask);
routerTask.delete("/tasks/:id", deleteTask);

export default routerTask;