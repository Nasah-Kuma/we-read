import User from "../models/user.js";
import { verifyToken } from "../utils/jwt.js";

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new Error("401 token not found");

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id);

    if(!user) throw new Error('401 user no longer exists');

    req.user = user;

    next();

  } catch (error) {
    next(error);
  }
}

export { requireAuth };
