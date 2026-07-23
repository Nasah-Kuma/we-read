import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        select: false
    },
    bio: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        //required: [true, "Role is required."],
        enum: []
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

export default User;