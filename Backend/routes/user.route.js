import express from "express";
import getUserProfileAndRepos, {getLikes, likeProfile} from "../controller/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthentication.js";

const router=express.Router();
router.get("/profile/:username",getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated ,getLikes);
router.post("/like/:username", ensureAuthenticated,likeProfile);
export default router;