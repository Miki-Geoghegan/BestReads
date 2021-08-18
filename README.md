# Best Reads

## Structure

This is a full-stack application, containing a server and client side. The former is built with Node.js and Express app to run the application, the latter with React.js.

The server contains auth routes, database configurations, middleware and cors in addition to models, public and private routes. The client folder contains functional authentication, components and images.


## Steps to install and Deploy this repository

- 1 - Create your app in Heroku and copy the URL

- 2 - Fork & Clone this repo

- 3 - Go to client subfolder and run npm install

- 4 - Go to server subfolder and run npm install

- 5 - In **server subfolder**, run the command git heroku add:remote -a <your app name> (you can also find this command in the heroku dashboard)

- 6 - Go to .env file in the server folder and change MONGODB_URI, SESSION_SECRET and HEROKU_URL to your own custom strings

- 7 - Go to the heroku dashboard and add **these 3 config vars** in the settings: 
  - **MONGODB_URI** = like in .env
  - **ORIGIN**:  << this has to be the heroku app name, not localhost >>
  - **SESSION_SECRET** = like in .env

- 8 - Go to your server terminal, and git push heroku master

- 9 - Your application should be running in Heroku correctly. If it doesn't, run on the terminal heroku logs --tail to see details of the error

- 10 - Whenever you want to redeploy changes to your frontend, follow this steps:

-- Delete the build folder in client

-- Create a new one with `npm run build` with the terminal **in the client subfolder**

-- Delete everything inside the public folder **in the server subfolder**

-- Copy the content from the build folder inside of Client and paste it inside of public in Server. Don't copy the folder, just the content!

-- git add . and git commit your changes on the server folder

-- rerun git push heroku master
