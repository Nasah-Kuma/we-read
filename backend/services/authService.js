import mongoose from "mongoose";
import User from "../models/user.js";
import * as bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

async function register(data){
    const { name, email, password } = data;
    const existingUser = await User.findOne({ email });
    
    if(existingUser)throw new Error("User with email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });

    const token = generateToken(newUser._id);

    return {
        token,
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
    }
}

async function login(data){
    const { email, password } = data;

    const existingUser = await User.findOne({ email }).select('+password');

    if(!existingUser) throw new Error('401 wrong email or password');

    const isMatched = await bcrypt.compare(password, existingUser.password);

    if(!isMatched) throw new Error('401 wrong email or password');

    const token = generateToken(existingUser._id);

    return {
        token,
        user: {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email
        }
    }
}

export {
    register,
    login
}