const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Application Route Working",
  });
});
const Application = require("../models/Application");
const authMiddleware = require("../middlewares/authMiddleware");

// Apply Job
router.post("/apply/:jobId", authMiddleware, async (req, res) => {
  try {
    const existingApplication = await Application.findOne({
      studentId: req.user.id,
      jobId: req.params.jobId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already Applied",
      });
    }

    const application = new Application({
      studentId: req.user.id,
      jobId: req.params.jobId,
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: "Applied Successfully",
      application,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
module.exports = router;