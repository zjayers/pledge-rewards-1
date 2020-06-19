/* Import Modules */
const path = require('path');

/* Set the Environmental Variables from the config file
 *  NOTE: for this server to function correctly, the config variables must be set
 * in the /config/.env file - this file does not exist if this project has been cloned from github.
 * Create a '.env' file in the 'config' folder and populate it with these variables
 * ----------------------
 * PORT:<port number>
 * DATABASE_NAME:<database name>
 * DATABASE_USER:<database username>
 * DATABASE_PASSWORD:<database password>
 * ----------------------
 * */
require('dotenv').config({ path: path.resolve(__dirname, './config/.env') });

/* If testing, append 'test' to the end of the database name so we don't
 append to our production database*/
if (process.env.NODE_ENV === 'test') {
  process.env.DATABASE_NAME = `${process.env.DATABASE_NAME}_test`;
}

/* Import Debug module
 *  These modules are used in place of 'console.log' to keep the terminal from being
 *  filled with unnecessary items during production runs
 * */
const serverDebug = require('debug')('server:startup');

/* App must be imported after the Environment Variables have been loaded
   or it will not have access to the variables*/
const database = require('./database');
const app = require('./app');

// Start the server listening on the predefined PORT variable
const server = app.listen(process.env.PORT, () => {
  serverDebug(`Server running on port: ${process.env.PORT}`);
});

// Export the server module
module.exports.server = server;
module.exports.database = database;
