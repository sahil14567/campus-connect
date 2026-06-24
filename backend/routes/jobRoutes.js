const express = require("express");
const Job = require("../models/Job");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Job Route Working",
  });
});

// Add Job
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const {
      companyName,
      role,
      package,
      location,
      description,
      requirements,
      deadline,
    } = req.body;

    const job = new Job({
      companyName,
      role,
      package,
      location,
      description,
      requirements,
      deadline,
      createdBy: req.user.id,
    });

    await job.save();

    res.status(201).json({
      success: true,
      message: "Job Added Successfully",
      job,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Get All Jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Get Single Job
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job Not Found",
      });
    }

    res.status(200).json({
      success: true,
      job,
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