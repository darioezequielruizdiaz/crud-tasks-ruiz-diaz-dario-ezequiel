import { Router } from "express";
const routerTag = Router();
import { createTag, getAllTags } from "../controllers/tag.controller.js";

routerTag.get("/tags", getAllTags);
routerTag.post("/tags", createTag);

export default routerTag;