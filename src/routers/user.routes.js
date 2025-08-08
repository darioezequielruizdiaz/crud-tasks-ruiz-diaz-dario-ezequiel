import { Router } from "express";
const routerUser = Router();
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";

routerUser.get("/users", getAllUsers);
routerUser.get("/users/:id", getUserById);
routerUser.post("/users", createUser);
routerUser.put("/users/:id", updateUser);
routerUser.delete("/users/:id", deleteUser);

export default routerUser;