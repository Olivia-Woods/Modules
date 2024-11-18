const express = require("express"); // Importing the 'Express' library. This command loads the Express module from the project's dependencies.

const testRoutes = require("./Routes/myTestRoutes");

const app = express(); // Creating an instance of Express, which we use to set up and configure our web server.

const port = 3000; // Defining the port number for our server to listen on, which will be http://localhost:3000.

app.use(`/`, express.static("Public"));

app.use("/myOwnTest", testRoutes);

app.get(`/test`, (req, res) => {
  // Setting up an endpoint. 'GET' is the HTTP method, used to request data from this route.
  res.send("Hello World"); // Sending a response of 'Hello World' to the client when they access the root URL ('/').
});

app.listen(port, () => {
  // Starting the server to listen on the specified port.
  console.log(`Server can now be called at http://localhost:${port}`); // Logging a message to the console to indicate that the server is running and accessible.
});
