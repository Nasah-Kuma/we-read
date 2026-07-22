import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "User name is require."],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "User name is require."],
        select: false
    },
    bio: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        required: [true, "Role is require."],
        enum: []
    },
  },
  {
    timestamps: true,
  },
);
