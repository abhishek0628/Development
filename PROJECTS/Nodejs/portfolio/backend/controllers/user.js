const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const User = require("../models/Users.js");

const router = express.Router();


// REGISTER
router.post("/register/api", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashedpass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedpass
    });

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


// LOGIN
router.post("/login/api", async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "Invalid credentials"
      });

    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(404).json({
        message: "Invalid credentials"
      });

    }

    // CREATE TOKEN
    const token = jwt.sign(

      {
        id: user._id,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1h"
      }

    );

    // RESPONSE
    res.status(200).json({

      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }

    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


// GET USER
router.get("/user/:id", auth, async (req, res) => {

  try {

    // ALLOW ONLY OWN PROFILE
    if (req.user.id !== req.params.id) {

      return res.status(403).json({
        message: "Access denied"
      });

    }

    const user = await User.findById(
      req.params.id
    ).select("-password");

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    res.status(200).json(user);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

module.exports = router;