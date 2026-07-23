import jwt from "jsonwebtoken";

function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY || "7d",
  });
}

function verifyToken() {}

export { generateToken };
