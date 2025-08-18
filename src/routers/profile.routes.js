import { Router } from "express";
const routerProfile = Router();
import { createProfile, getAllProfiles } from "../controllers/profile.controller.js";

routerProfile.get("/profiles", getAllProfiles);
routerProfile.post("/profiles", createProfile);

export default routerProfile;