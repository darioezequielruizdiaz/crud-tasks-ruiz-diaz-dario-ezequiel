import { Router } from "express";
const routerTaskTag = Router();
import { createTaskTag, getAllTaskTags } from "../controllers/tasktag.controller.js";

routerTaskTag.get("/tasktags", getAllTaskTags);
routerTaskTag.post("/tasktags", createTaskTag);

export default routerTaskTag;