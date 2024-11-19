const express = require("express"); // Import Express Package
const friendRoutes = require("./routes/friendRoutes"); // Corrected Path

const app = express(); // Create A New App
const port = 3000;

// Parse Requests of Content-Type Application/Json (Needed for POST and PUT requests using req.body)
app.use(express.json());

app.use("/", express.static("public")); // Serve Static Files from 'public' Folder
app.use("/friends", friendRoutes); // Use Friend Routes

// Starts the Backend App on the Given Port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
