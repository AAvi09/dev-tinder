const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
      minLength: [4, "first name should be atleast 4 characters long"],
      maxLength: [50, "first name should be less than 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "first name is required"],
      minLength: [4, "first name should be atleast 4 characters long"],
      maxLength: [50, "first name should be less than 50 characters"],
    },

    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("email is not valid" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("enter a strong password" + value);
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("gender not valid!!!!");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9GLGJO2vzkjQsdP267Wux0UtwL0BeBlxpg&s",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("invalid photo URL" + value);
        }
      },
    },
    about: {
      type: String,
      default: "this is the default about of the user",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
