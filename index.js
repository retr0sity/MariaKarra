// Import required packages
import express from "express";

// Initialize Express app and set port
const app = express();
const port = 3000;

let currentPage = '';

// Set up middleware
app.use(express.static("public"));  

app.get("/", (req, res) => {
    res.render("index.ejs",  { currentPage: 'home' });
});

app.get('/about', (req, res) => {
    res.render('about.ejs', { currentPage: 'about' });
});

app.get('/work', (req, res) => {
    res.render('work.ejs', { currentPage: 'work' });
});
// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});