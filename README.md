# README
## Nicholas Mendez | Take Home Coding Challenge
## Video Walkthrough Link
- [CLICK HERE FOR A VIDEO WALKTHROUGH OF THE APP](https://youtu.be/6xQxcri6YoM)

* React Version 18.2
* Ruby Version 2.7.4
* Rails Version 7.0.4
* Build Environment MacOS (Catalina)
* PostgreSQL version 14.4

* System dependencies
  - Dependencies For Frontend
  "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.2.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "react-uuid": "^2.0.0",
    "web-vitals": "^2.1.4"

  - Dependencies for Backend
    ruby "2.7.4"
    "rails", "~> 7.0.4"
    "pg", "~> 1.1"
    "puma", "~> 5.0"
    "tzinfo-data"
    "bootsnap"
    "debug"
    'byebug', '~> 11.1', '>= 11.1.3'
    'active_model_serializers', "~> 0.10.13"

## Installation and Setup 
1. Fork and clone the respository found here
  - [Click here for Take Home Coding Challenge Repository](https://github.com/nickmendezFlatiron/billit)

2. Inside the root directory
  - run terminal command: bundle install
    - this will install the ruby gem dependencies for the application

3. Navigate to the client folder
  - run terminal command: cd client/
  - then run terminal command: npm install
    - this will install the npm dependencies for the application

4. Run application on localhost
  - open a second command terminal and navigate to the root directory
  - then run terminal command: rails s
    - this will start the backend server on localhost:3000
  
  - navigate back to the original command terminal
    - the current directory of this command terminal be the client folder
    - within the client folder, run terminal command: npm start
      - this will run the client (frontend) on localhost:4000

5. The application should be successfully started at this point. 

