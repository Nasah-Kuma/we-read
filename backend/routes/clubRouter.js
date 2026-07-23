import express from "express";
import * as clubController from "../controllers/clubController.js";

const router = express.Router();

router.post('/', clubController.createClub);

router.get('/', clubController.getClubs);

export default router;