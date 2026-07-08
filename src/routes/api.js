const express = require("express");
const User = require("../models/User");

const router = express.Router();

// GET test route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Voyage Français API is working!"
  });
});

// POST - Create a new user
router.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, email, password, languageLevel } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: firstName, lastName, email, password"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      languageLevel: languageLevel || "Beginner"
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        languageLevel: newUser.languageLevel
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message
    });
  }
});

// GET - Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({
      success: true,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message
    });
  }
});

module.exports = router;