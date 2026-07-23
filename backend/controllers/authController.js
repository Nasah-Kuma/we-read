import * as authService from "../services/authService.js";

async function register(req, res, next) {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch(error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const user = await authService.login(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
}

export {
    register,
    login
}