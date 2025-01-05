// Import required packages
import express from "express";

// Initialize Express app and set port
const app = express();
const port = 3000;

let currentPage = '';

const projects = [
    {
      id: '1',
      title: 'Myrtis',
      description: 'In May 2024, Maria Karra showcased the Myrtis project at the Athens Digital Arts Festival (ADAF), presenting a thought-provoking multimedia installation. The installation invited visitors into an immersive experience, guided by narrators using dual headsets to listen to the Myrtis e.p.. This innovative approach combined sound, storytelling, and visual elements, creating an intimate journey through the themes and historical resonance embodied in the project. .',
      images: [
        '/images/myrtis/myrtis-image-0.jpg',
        '/images/myrtis/myrtis-image-1.jpeg',
        '/images/myrtis/myrtis-image-2.jpeg',
        '/images/myrtis/myrtis-image-3.jpeg',
        '/images/myrtis/myrtis-image-4.jpg',
        '/images/myrtis/myrtis-image-5.jpg',
        '/images/myrtis/myrtis-image-6.jpg',
        '/images/myrtis/myrtis-image-7.jpg',
        '/images/myrtis/myrtis-image-8.jpg',
        '/images/myrtis/myrtis-image-9.jpg',
        '/images/myrtis/myrtis-image-10.jpg',
        '/images/myrtis/myrtis-image-11.jpg',
        '/images/myrtis/myrtis-image-12.jpg',
        '/images/myrtis/myrtis-image-13.jpg',
        '/images/myrtis/myrtis-image-14.jpeg',
        '/images/myrtis/myrtis-image-15.jpeg',
        '/images/myrtis/myrtis-image-16.jpeg',
        '/images/myrtis/myrtis-image-17.jpeg',
        '/images/myrtis/myrtis-image-18.jpeg',
        '/images/myrtis/myrtis-image-19.jpeg',
      ],
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: 'This is the second project.',
      images: [
        '/images/myrtis/myrtis-image-0.jpg',
        '/images/myrtis/myrtis-image-1.jpg',
        '/images/myrtis/myrtis-image-2.jpg',
        '/images/myrtis/myrtis-image-3.jpg',
        '/images/myrtis/myrtis-image-4.jpg',
        '/images/myrtis/myrtis-image-5.jpg',
        '/images/myrtis/myrtis-image-6.jpg',
      ],
    },
];

// Set up middleware
app.use(express.static("public"));  

app.get("/", (req, res) => {
    res.render("index.ejs",  { currentPage: 'home' });
});
app.get('/about', (req, res) => {
    res.render('about.ejs', { currentPage: 'about' });
});

app.get('/projects/:id', (req, res) => {
    const project = projects.find((p) => p.id === req.params.id);
  
    if (!project) {
      return res.status(404).send('Project not found');
    }
  
    res.render('project.ejs', { project , currentPage: 'work' });
});

app.get('/work', (req, res) => {
    res.render('work.ejs', { currentPage: 'work', projects });
});
// Start the server
app.listen(port, () => {
    console.log(`'Server is running on http://localhost:${port}`);
});