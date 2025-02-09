// Import required packages
import express from "express";

// Initialize Express app and set port
const app = express();
const port = 3000;

let currentPage = '';

const projects = [
  {
      id: '1',
      title: 'THESIS',
      description: "The multimedia installation blended environmental art with sociopolitical commentary, exploring themes of collective memory and modern Greek identity through abstract expressionism in space. Sculptural elements appeared to merge with or emerge from the walls, creating a fluid, immersive environment. A central column was transformed into a carousel displaying artworks in each direction, symbolizing identity's layered nature. Embedded within this dynamic space were two art video games, 57 and LEVEL ZERO, whose pixel art aesthetics critically engaged with the medium’s evolution. This integration of tactile and digital elements bridged contemporary art and game design, offering a multifaceted experience.",
      images: [
        '/images/THESIS/1_thesis.JPG',
        '/images/THESIS/thesis-image-0.jpeg.JPG',
        '/images/THESIS/thesis-image-1.jpeg.JPG',
        '/images/THESIS/thesis-image-2.jpeg.JPG',
        '/images/THESIS/thesis-image-3.jpeg.JPG',
        '/images/THESIS/thesis-image-4.jpeg.JPG',
        '/images/THESIS/thesis-image-5.jpeg.JPG',
        '/images/THESIS/thesis-image-6.jpeg.JPG',
        '/images/THESIS/thesis-image-7.jpeg.JPG',
        '/images/THESIS/thesis-image-8.jpeg.JPG',
        '/images/THESIS/thesis-image-9.jpeg.JPG',
        '/images/THESIS/thesis-image-10.jpeg.JPG',
        '/images/THESIS/thesis-image-11.jpeg.JPG',
        '/images/THESIS/thesis-image-12.jpeg.JPG',
        '/images/THESIS/thesis-image-13.jpeg.JPG',
        '/images/THESIS/thesis-image-14.jpeg.JPG',
        '/images/THESIS/thesis-image-15.jpeg.JPG',
        '/images/THESIS/thesis-image-16.jpeg.JPG',
        '/images/THESIS/thesis-image-17.jpeg.JPG',
        '/images/THESIS/thesis-image-18.jpeg.JPG',
        '/images/THESIS/thesis-image-19.jpeg.JPG',
        '/images/THESIS/thesis-image-20.jpeg.JPG',
        '/images/THESIS/thesis-image-21.jpeg.JPG',
        '/images/THESIS/thesis-image-22.jpeg.JPG',
        '/images/THESIS/thesis-image-23.jpeg.JPG',
        '/images/THESIS/thesis-image-24.jpeg.JPG',
        '/images/THESIS/thesis-image-25.jpeg.JPG',
        '/images/THESIS/thesis-image-26.jpeg.JPG',
        '/images/THESIS/thesis-image-27.jpeg.JPG',
        '/images/THESIS/thesis-image-28.jpeg.JPG',
        '/images/THESIS/thesis-image-29.jpeg.JPG',
        '/images/THESIS/thesis-image-30.jpeg.JPG',
        '/images/THESIS/thesis-image-31.jpeg.JPG',
        '/images/THESIS/thesis-image-32.jpeg.JPG',
        '/images/THESIS/thesis-image-33.jpeg.JPG',
        '/images/THESIS/thesis-image-34.jpeg.JPG',
        '/images/THESIS/thesis-image-35.jpeg.JPG',
        '/images/THESIS/thesis-image-36.jpeg.JPG',
        '/images/THESIS/thesis-image-37.jpeg.JPG',
        '/images/THESIS/thesis-image-38.jpeg.JPG',
        '/images/THESIS/thesis-image-39.jpeg.JPG',
        '/images/THESIS/thesis-image-40.jpeg.JPG',
        '/images/THESIS/thesis-image-41.jpeg.JPG',
        '/images/THESIS/thesis-image-42.jpeg.JPG',
        '/images/THESIS/thesis-image-43.jpeg.JPG',
        '/images/THESIS/thesis-image-44.jpeg.JPG'
      ],
    },
    {
      id: '2',
      title: 'ADAF',
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
      id: '3',
      title: 'DISTUPTION',
      description: '',
      images: [
        '/images/Disruption/3_disruption.jpeg',
        '/images/Disruption/disruption-image-0.jpeg.png',
        '/images/Disruption/disruption-image-1.jpeg.png',
        '/images/Disruption/disruption-image-2.jpeg.png',
        '/images/Disruption/disruption-image-3.jpeg.png',
        '/images/Disruption/disruption-image-4.jpeg.png',
        '/images/Disruption/disruption-image-5.jpeg.JPG',
        '/images/Disruption/disruption-image-6.jpeg.png',
        '/images/Disruption/disruption-image-7.jpeg.png',
        '/images/Disruption/disruption-image-8.jpeg.png',
        '/images/Disruption/disruption-image-9.jpeg.png',
        
      ],
    },
    {
      id: '4',
      title: 'MYRTIS',
      description: "The Myrtis project has been a pivotal part of my artistic evolution, merging history, contemporary art, music, and storytelling. Inspired by the reconstructed face of a 2,500-year-old Athenian girl, Myrtis, the project delves into themes of identity, resilience, and the connection between past and present. I contributed to the 2021 Triptych of Myrtis exhibition at the National War Museum in Athens, showcasing Myrtis as a symbol of cultural continuity. In collaboration with Christoforos Alamanis, I co-created the Myrtis EP, a six-song experimental electronic music project that narrates Myrtis' story. Currently, I am illustrating a fairytale inspired by Myrtis and working on concept sketches for a literary work by Dr. Peny Tsakanikou, a researcher in Palaeolithic archaeology. Looking ahead, I am collaborating with Manolis Papagrigorakis on the potential creation of a video game based on Myrtis' story, combining my love for game design with historical storytelling.",
      images: [
        '/images/3_Myrtis Project/myrtis-image-0.jpeg.jpg',
        '/images/3_Myrtis Project/myrtis-image-0.jpeg16.png',
        '/images/3_Myrtis Project/myrtis-image-1.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-2.jpeg.jpg',
        '/images/3_Myrtis Project/myrtis-image-3.jpeg.jpg',
        '/images/3_Myrtis Project/myrtis-image-4.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-5.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-6.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-8.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-9.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-10.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-11.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-13.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-14.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-15.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-16.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-17.jpeg.png',
        '/images/3_Myrtis Project/myrtis-image-18.jpeg.png',
      ],
    },
    {
      id: '4',
      title: 'FAMILY SECRETS',
      description: '',
      images: [
        '/images/family secrets/5_family secrets.jpg',
        '/images/family secrets/family secrets-image-0.jpeg.JPG',
        '/images/family secrets/family secrets-image-1.jpeg.jpeg',
        '/images/family secrets/family secrets-image-2.jpeg.jpeg',
        '/images/family secrets/family secrets-image-4.jpeg.JPG',
        
      ],
    },
    {
      id: '5',
      title: 'IMPRINT-ED',
      description: '',
      images: [
        '/images/Polaroid Imprint-ed/5_imprint-ed.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-0.jpeg.JPG',
        '/images/Polaroid Imprint-ed/polaroids-image-1.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-2.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-3.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-4.jpeg.JPG',
        '/images/Polaroid Imprint-ed/polaroids-image-5.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-6.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-7.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-8.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-9.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-10.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-11jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-12.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-13.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-14.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-15.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-16.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-17.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-18.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-19.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-20.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-21.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-22.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-23.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-24.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-25.jpeg.jpg',
        '/images/Polaroid Imprint-ed/polaroids-image-26.jpeg.jpg'
      ],
    },
    {
      id: '6',
      title: 'QUARANTINE REGISTRATION',
      description: '',
      images: [
        '/images/Quarantine registration/quarantine registration-image-0.jpeg.JPG',
        '/images/Quarantine registration/quarantine registration-image-1.jpeg.JPG',
      ],
    },
    {
      id: '7',
      title: 'ERASMUS RESIDENCY',
      description: '',
      images: [
        '/images/Erasmus Residency/erasmus-image-0.jpeg.JPG',
        '/images/Erasmus Residency/family secrets-image-1.jpeg.JPG',
      ],
    },
    {
      id: '8',
      title: 'ZAGREB',
      description: '',
      images: [
        '/images/Zagreb/8_zagreb.JPG',
        '/images/Zagreb/zagreb-image-0.jpeg.JPG',
        '/images/Zagreb/zagreb-image-1.jpeg.JPG',
        '/images/Zagreb/zagreb-image-2.jpeg.JPG',
        '/images/Zagreb/zagreb-image-3.jpeg.JPG',
        '/images/Zagreb/zagreb-image-4.jpeg.JPG',
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