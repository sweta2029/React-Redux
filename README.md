*install vs code
*install node js
*set path in environment for node js
*C:\Users\user\AppData\Roaming --add npm file
\*npx create-app my-project
C:\React> cd my-project
C:\React\my-project - npm start

\*change default brower - go to default app and add google chrome

Create the new application
npx create-react-app my-project

- Create components
- App.js - BrowserRouter is added for the navigation
  "Our dashboard features two tabs: 'Home' and 'Add.' Users can add records using the 'Add' button. Upon selecting a single record, the 'Edit' button becomes available. Clicking on 'Edit' allows users to update, delete, and publish the selected record."

- Install the required packages
  npm install bootstrap
  npm install react-router-dom
  npm i react-toastify for notification
  React Redux
  npm i redux react-redux redux-thunk axios redux-logger @reduxjs/toolkit
  npm install -g json-server
  json-server --watch src/Data/db.json --port 8000
  Axios

- git
  git add .
  git commit -m "project"
  git push
  git pull
  git config --global user.name "Name"
  git config --global user.email "your@email.com"

Jest

- npm install --save-dev jest @testing-library/react @testing-library/jest-dom
- npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
- we need to create a setupTest.js file in the src folder
  import { configure } from "enzyme";
  import Adapter from "enzyme-adapter-react-16";
  configure({ adapter: new Adapter() });

React Redux Post Application with Rest API calls

- Each Post has id, title, body.
- We can create, retrieve, update, delete Posts.

* create .env file to store URL
  process.env.REACT_APP_API_BASE_URL
  REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com
  https://jsonplaceholder.typicode.com/posts

* Install Prettier - for code formate
  cntrl+shif+p add blow cmd
  {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  }
  go to stting an add check box

* Redux
  one store for the entire application
  allows state to be updated with dispatch(action)

  -action- what happen in the application. Describe the changes in the state of application.
  actions are js object that contain information.
  reducr- update the state based on action
  -Reducers are the functions that accepts state and action as parameter and return the next state of the application.
  (prevState,action)=> newState
  -store- which brings actions and reducers together
  holds state of your application
