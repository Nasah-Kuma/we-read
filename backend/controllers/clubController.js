import * as clubService from "../services/clubService.js";

async function createClub(req, res, next) {
    try {
        const club = await clubService.createClub(req.body);
        res.status(201).json(club);
    } catch(error) {
        next(error);
    }
}

async function getClubs(req, res, next) {
    try {
        const clubs = await clubService.getClubs();
        res.status(201).json(clubs);
    } catch (error) {
        next(error);
    }
}

export {
    createClub,
    getClubs
}