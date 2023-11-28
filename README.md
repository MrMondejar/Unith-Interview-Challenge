# Unith Challenge
Please use the scripts in package.json as intended to run the app.

To run development:

1. `npm install`
2. `npm run dev`

To run the tests:

   `npm run tests` 
   Please run this command from root of the project, due to some issues in configuration, it won't work from anywhere else.

Docker

To run docker use:

1. docker build -t [any name] .
2. docker run -d --rm -p 5173:5173 --name [name of the container] [your docker image name]