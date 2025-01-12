# How to Run the Project using npm

Welcome to the Project setup and running guide! This README file will provide step-by-step instructions on how to set up and run the Project with npm. Make sure you follow all the steps to ensure a smooth process.
**Attention** due to the client's request, I did not apply any design architecture pattern.

## Requirements

Before you begin, make sure you have the following installed on your system:

1. **Node.js and npm**: Make sure you have Node.js (since it includes npm) installed. You can download the latest version from https://nodejs.org/.



3. **Postgres**: Make sure you have postgres installed on your machine and know the password
## Setting up the Environment

Follow these steps to set up the required environment:

1. Clone this repository to your local system or download the files.

2. Navigate to the repository root directory using the terminal.

3. Run the following command to install the project dependencies:
 * npm install
4. Now you need to configure the postgres db connection

Make sure [postgres](https://www.postgresql.org/download/) is installed on your pc.

5. navigate to the DB folder and continue clicking on the dbconexao.js file: where there is password: 'ENTER THE PASSWORD OF postgres', port: 5432, // default PostgreSQL port

## Running the project

Now that the environment is set up, you can start:

1. In the terminal, still in the root directory of the repository, run the following command to start the project:
 * npm run start

This will start on the default port (usually port 3000).

2. Once the project is running, you can access the endpoints using the tools of your choice, such as browsers [Click here to test](http://localhost:3000/) or `curl`.

## Ending Execution

To end the execution, go back to the terminal where you started and press `Ctrl + C`.

Remember, this is a basic guide to setting up and running your project using npm.

Have fun exploring the project! If you have any questions or encounter any problems, do not hesitate to consult the project installation documentation.
