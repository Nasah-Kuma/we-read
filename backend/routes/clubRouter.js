import express from "express";
import * as clubController from "../controllers/clubController.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post('/', requireAuth, clubController.createClub);

router.get('/', clubController.getClubs);

export default router;