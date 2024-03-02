const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router(); // express.Router() şeklinde çağrılmalı

//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id",getWorkout)

//post a new workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout)

router.patch("/:id",updateWorkout);

module.exports = router;
