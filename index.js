// Import required packages
import express from "express";

// Initialize Express app and set port
const app = express();
const port = 3000;

// Set up middleware
app.use(express.static("public"));  

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});