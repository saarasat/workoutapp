const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const Workout = require('../models/workout')
const app = require('../app')



const api = supertest(app)

beforeEach(async () => {
  await Workout.remove({})

  let workoutObject = new Workout(helper.initialWorkouts[0])
  await workoutObject.save()

  workoutObject = new Workout(helper.initialWorkouts[1])
  await workoutObject.save()

  supertest(app)
  .post('/login')
  .send({
    username: process.env.TEST_USER,
    password: process.env.TEST_PASSWORD,
  })
  .end((err, response) => {
    token = response.body.token; // save the token!;
  });

})

describe('GET /', () => {
  // token not being sent - should respond with a 401
  test('It should require authorization', () => {
    return supertest(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(401);
      });
  });
  // send the token - should respond with a 200
  test('It responds with JSON', () => {
    return supertest(app)
      .get('/')
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
});
})

test('workouts are returned as json', async () => {
  await api
    .get('/api/workouts')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all workouts are returned', async () => {
  const response = await api.get('/api/workouts')

  expect(response.body.length).toBe(helper.initialWorkouts.length)
})

test('a specific workout is within the returned workouts', async () => {
  const response = await api.get('/api/workouts')

  const sports = response.body.map(r => r.sport)

  expect(sports).toContain(
    'Running in database again'
  )
})

test('a valid workout can be added ', async () => {
  const newWorkout = {
    sport: "Valid workout",
    time: "03:11",
    date: new Date(),
    day: "Sat",
    month:"January"
  }

  await api
    .post('/api/workouts')
    .send(newWorkout)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const workoutsAtEnd = await helper.workoutsInDb()
  expect(workoutsAtEnd.length).toBe(helper.initialWorkouts.length + 1)

  const sports = workoutsAtEnd.map(n => n.sport)
  expect(sports).toContain(
    'Valid workout'
  )
})

test('a workout without time cannot be added ', async () => {
  const newWorkout = {
    sport: "Valid workout",
    date: new Date(),
    day: "Sat",
    month:"January"
  }

  await api
    .post('/api/workouts')
    .send(newWorkout)
    .expect(400)

  const response = await api.get('/api/workouts')

  expect(response.body.length).toBe(helper.initialWorkouts.length)

})