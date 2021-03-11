Hey, User!

I've built this would you rather function as part of the Udacity React Nanodegree Program. The app should contain all the functionality expected as part of the rubric.

Note a couple of things: the overall design of the website was pretty slapdash. I had almost no experience working with HTML and CSS before starting this course and didn't really want to waste time learning a load of it so I have just shoved the things together a bit but everything should function correctly. At some point I will update this when I actually take the time to effectively learn it properly but enjoy this for now.

Below I've given a rough order of the tasks I had to complete from each view. To be honest I didn't actually start this document until part way through the project so it picks up from there. However it is pretty thorough from when I actually did remember to start it.

Thanks for checking out my project!


Order of tasks:

Step 1: Break down app into views. Determine look and functionality of each view in app.

Structure:
-App
-Nav
    -Home
    -Add
    -Leaderboard
    -Login
    -Logout


...


ToDos:
-Implement Login functionality and redirect user to login page if user is not logged in.
-Create functionality on question preview to obtain data from questions and populate correct areas with data
-Map through all questions in questions data and list them on home page passing data or question id to question preview.
-Implement add functionality allowing users to append their own questions to the questions in data following the form given in DATA.
-Extract data for leaderboardUser to show correct amount of q's asked and answered and display in Component
-Map through all users in data and list them on leaderboard, ordering them from most to least by using the .sort method on the object. Pass id to leaderboardUser to display correct info.
-Implement logout functionality, setting authedUser to null and redirecting to logout page.
-Add answer page which allows user to answer questions. Change state based on answer and increase number of answered questions. set questions to answered.

Order of tasks from now:
Use hardcoded value for login functionality for now to save problem of having to login every time page is reloaded. Implement this function last.

1. Create QuestionPreview functionality, obtaining data from database then displaying in correct areas.
    -api > reducer > action > handler > UI

2. Alter code to make repeatable list, reading data from state and presenting in a list of QuestionPreview components.
    - pass data to Home component for list of questions. Use variable to create array of id's and pass this as prop.
    - map across questions.keys taking the id from the key properties and passing that to QuestionPreview as a prop.
        - Alter mSTP in Question preview to use the id property passed to it rather than the hard coded value.
    - alter QuestionPreview to make code repeatable for incoming question data
    - sort using timestamp for correct order

3. Build add function, allowing the authedUser to add his own questions to the database or state.
    - User must input an A and B answer and then submit(button).
    - handler will call dispatch action which should be passed to reducer to be added to the store. The question should also be formatted using the method given in the DATA api. This should be done before being added to state.
    - action will also need to be called which adds the question id to the users list of questions.
    - once operation is done the user should be redirected back to the homepage and will see their question at the top of the pile.
    - order of events: user submits answers > handler dispatches async action with text values and authedUser > action sends api request to format the question > save question in api is dispatched > action is passed to reducer > user is redirected to home page.


4. Build answer function, have two clickable buttons for option A and option B with captions for each. User able to select choice.
    - Check will be done to see whether user has already answered question. If so buttons will be disabled and an alert will appear informing user.
    - User selects choice by clicking appropriate button. Each button will have tag for optionOne or optionTwo.
    - handler dispatches action with choice data included.
    - async action will send info to database changing following:
        - in users array, the users answers will have the question id and the chosen answer added.
        - in questions array, find the question with the matching id param, then alter optionOne or optionTwo depending on which user has chosen. Add users username to list of votes for that particular option.
    - reducer will inform store of changes and pass new data.
    - upon completion, user will receive an alert saying thanks for completing and then be redirected back to the homepage.

5. Build leaderboard function. Read the questions answered and questions asked by the user and display these along with a total figure. Use the total figure to sort the users in descending order.
    - Build LeaderboardUser component which contains necessary information i.e. the amount of q's asked and answered and the total of the two.
    - Sort these into order with the user with highest total at the top and descending from there.

6. Implement Login functionality. On app page, do check to see if authedUser is true, if not then redirect user to login page where they can select from dropdown list. Implementing on top level will mean the check is always done when a user tries to navigate among the other pages.
    - Create Login UI, use a dropdown list which maps over users and gives options to the current user. User chooses their selection then submits. Submit handler determines their selection from the name or value of the input and then calls the action passing it that value.
    - Action is not async so no dispatch required. Reducer takes data from action and then sets the authedUser accordingly.
    - Once operation is completed user is redirected to the homepage to begin session.

7. Implement Logout functionality. When user clicks logout button they receive an alert saying they've logged out successfully and that if they want to restart they will need to log back in. Consider logout page which will redirect after setTimeout has completed a certain amount of time. Logout will then redirect back to login page.

8. Add answered/unanswered questions to the home page. Home will sort questions into whether that user has answered the question or not and then pass this list to map which will render a list for answered and unanswered questions. Home will only show one of the lists at a time and the ans/unans will be navigateable via clickable text. When user clicks on the text the state will change to the opposite of what it was (true/false) and the other list will be displayed.
    - Add sorting functionality which passes answered/unanswered questions as props.
        - Iterate over users[authedUser]'s answers
        - Add the id's to the answered array.
        then
        - Iterate over the questions,
    - Add UI for answered/unanswered and make text clickable. Add state that answered: false by default to show unanswered questions. When text for other is clicked, set the state to the opposite of what it currently is (!prevState or something). Text for other will render on change of state.

9. For answered questions, show how many users have answered that particular question



    To use this app, simply clone the repo from github to your text editor then start using npm start from the command line! Enjoy!