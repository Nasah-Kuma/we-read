import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Club name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Club description is required"],
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // must match mongoose.model("User", ...)
    },
    currentBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    isPrivate: {
      type: Boolean,
      //required: [true, "Please specify if this club is private"],
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Club = mongoose.model("Club", clubSchema);

export default Club;
