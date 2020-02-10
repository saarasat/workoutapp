# Sporttivartti - (Mobile) Workout application  

Application for keeping track of exercising activity and results. Best used on a mobile device.

Can be found at [sporttivartti.herokuapp.com](https://sporttivartti.herokuapp.com/)

[Hours worked on the project](https://github.com/saarasat/workoutapp/blob/master/Documentation/Hours%20worked.md)

### User manual

#### Creating an account, logging in and out

The app requires a username (between 3-50 characters) and a password (between 6-50 characters)

There are test credentials you can use to try the app out:

- Username: "Testuser"
- Password: "password123"

After logging in the user can logout from the upper right corner of the topnav.

#### Creating settings

First up, it is the best to add the settings by tapping the "Profile"-tab. 
That way each workout can have calories added to them.

<b>1. First settings:</b>
- Date: current day by default. Can be changed.
- Height: in cm
- Weight: in kg

All three data points are required.

<img src="/Documentation/images/ProfilePage.png" width="216" height="384" />

<b>2. Weight graph:</b> 
- After inserting the weight of two separate days, the graph displays weight per day.
- Data for each day, can be changed by inserting a new weight for that day in the form displayed

<img src="/Documentation/images/ProfileGraph.png" width="216" height="384" />

<b>3. BMI:</b>
- The app counts BMI (Body mass index) based on weight and height. 

### Removing the account

The account and all data related to it can be deleted on the profile page. As removal of the account will delete all data relating to that account permanently, the user is asked to verify the deletion.

### Adding workouts

Can be done from homepage, or by clicking the button "Training" in the bottom navigation. 

<img src="/Documentation/images/HomePage.png" width="216" height="384" />

1. Choose the type of a workout
2. Insert time, the specific sport and time used working out
3. For cycling and running also distance can be added 

<img src="/Documentation/images/AddingWorkouts.png" width="216" height="384" />

### Checking the results


After adding a workout the user is redirected to the workout-list. It shows monthly the workouts added and can be found also on the bottom navigation.

- Graph of the weekly results based on time used working out
- Total workouts
- Total time used working out 
- Total calories

- The best workout of the month based on calories burned
- Kilometers for running and cycling

<img src="/Documentation/images/WorkoutList.png" width="216" height="384" />

<img src="/Documentation/images/ResultList.png" width="216" height="384" />

Each result is clickable and can be checked and removed individually

<img src="/Documentation/images/SingleResult.png" width="216" height="384" />

### Stopwatch

From the tab "Stopwatch" a stopwatch can be found and used to measure time of a sport activity

<img src="/Documentation/images/Stopwatch.png" width="216" height="384" />

### Adding personal programs

The app allows to add personalized workout programs

1. Click "Programs" in the bottom nav
2. Click the "Add new program" -header
3. Program requires a name (between 3-50 characters)
4. The toughness level should be added as well

<img src="/Documentation/images/NewProgram.png" width="216" height="384" />



### Adding moves to personal programs

Moves can be added to the program by clicking the pen-icon

1. Click the "Missing a move? Add one"-button
2. Add the move you wish to have for future

<img src="/Documentation/images/ProgramForn.png" width="216" height="384" />
<img src="/Documentation/images/MoveForm.png" width="216" height="384" />

3. The move shows up in the dropdown

<img src="/Documentation/images/Program.png" width="216" height="384" />

4. Add a move to the program:
  - Select name
  - Add the amount of repetitions (optional)
  - Add the kgs used (optional)

5. The program can be used from the bottom at "Start this program"

### Working out with a personal program

After navigating to the "Programs"-tab, the program can also be started from the programlist, by clicking on its name.

<img src="/Documentation/images/Programs.png" width="216" height="384" />

After doing the program, it can be saved as a workout just like any other workout

<img src="/Documentation/images/DoingAProgram.png" width="216" height="384" />

<img src="/Documentation/images/AddingAProgamWorkout.png" width="216" height="384" />





