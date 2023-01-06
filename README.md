# REST-Rant

REST-Rant is a simple web application that allows users to create and view short posts (rants). The application is built using JavaScript and the Express.js framework, and it uses MongoDB to store information about the rants.

## Description

REST-Rant is a full-stack web application that allows users to create and view short posts, or "rants". Users can create rants by entering a title and body, and they can view rants by clicking on them in the list. Rants are stored in a MongoDB database, and the application uses the Express.js framework to handle HTTP requests and serve the user interface.


## Technologies

REST-Rant is built using the following technologies:

- JavaScript
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Technical Information

To run the REST-Rant application on your local machine, follow these steps:

1. Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/).
2. Create a MongoDB database and collection for the rants.
3. Clone this repository and navigate to the root directory of the project.
4. Run the following command to install the required dependencies:

npm install

5. Run the following command to start the server:

npm start

The server will start running on port 3000 by default. You can access the application by navigating to `http://localhost:4000` in your web browser.

To deploy the application to a production environment, you will need to set the `NODE_ENV` environment variable to `production` and specify a different port using the `PORT` environment variable.

## How to Contribute

We welcome contributions to the REST-Rant project! To contribute, follow these steps:

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and clone it to your local machine.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Push your branch to your fork on GitHub.
5. [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) to the `master` branch of the `rest-rant` repository.

Please make sure to follow our coding standards and to write unit tests for your code.

## Issues

- There is currently a bug where the "Create Rant" form is not properly validated. A fix is being worked on in the `form-validation` branch.
- We would like to add the ability for users to edit and delete rants in a future release.
