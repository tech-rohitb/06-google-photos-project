const express = require("express");
const cors = require("cors");

// Create express app
const app = express();
const PORT = 9090;

// Middlewares
app.use(cors());
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Logging middleware
app.use((request, response, next) => {
  console.log(`${request.method} ${request.url}`);
  next();
});

// Example route
app.get("/", (request, response) => {
  response.send("Hello, World!");
});

// Error handling middleware
app.use((err, request, response, next) => {
  console.error(err.stack);
  response.status(500).send("Something broke!");
});

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
