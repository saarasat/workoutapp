const Workout = require('../models/workout')

const initialWorkouts = [
  {
    sport: "Running in database",
    time: "03:00",
    date: new Date(),
    day: "Fri",
    month:"December"
  },
  {
    sport: "Running in database again",
    time: "02:20",
    date: new Date(),
    day: "Thu",
    month:"October"
  }
]

const workoutsInDb = async () => {
  const workouts = await Workout.find({})
  return workouts.map(workout => workout.toJSON())
}

module.exports = {
  initialWorkouts, workoutsInDb
}