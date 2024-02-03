*install vs code
*install node js
*set path in environment for node js
*C:\Users\user\AppData\Roaming --add npm file
*npx create-app my-project
C:\React> cd my-project
C:\React\my-project - npm start

*change default brower - go to default app and add google chrome


Create the new application
    npx create-react-app my-project

* Create components 
* App.js - BrowserRouter is added for the navigation
           "Our dashboard features two tabs: 'Home' and 'Add.' Users can add records using the 'Add' button. Upon selecting a single record, the 'Edit' button becomes available. Clicking on 'Edit' allows users to update, delete, and publish the selected record."
         

* Install the required packages
  npm install bootstrap
  npm install react-router-dom
  npm i react-toastify for notification
  React Redux
  npm i redux react-redux redux-thunk axios redux-logger @reduxjs/toolkit
  npm install -g json-server
  json-server --watch src/Data/db.json --port 8000
  Axios


* git
git add .
git commit -m "project"
git push
git pull
git config --global user.name "Name"
git config --global user.email "your@email.com"

Jest
* npm install --save-dev jest @testing-library/react @testing-library/jest-dom
* npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
* we need to create a setupTest.js file in the src folder
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

React Redux Post Application with Rest API calls
- Each Post has id, title, body.
- We can create, retrieve, update, delete Posts.