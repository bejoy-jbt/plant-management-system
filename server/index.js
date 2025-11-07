const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'plants.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Ensure data directory exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Helper function to read plants
const readPlants = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write plants
const writePlants = (plants) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(plants, null, 2));
};

// GET all plants
app.get('/api/plants', (req, res) => {
  const plants = readPlants();
  res.json(plants);
});

// GET single plant by ID
app.get('/api/plants/:id', (req, res) => {
  const plants = readPlants();
  const plant = plants.find(p => p.id === parseInt(req.params.id));
  if (plant) {
    res.json(plant);
  } else {
    res.status(404).json({ error: 'Plant not found' });
  }
});

// POST create new plant
app.post('/api/plants', (req, res) => {
  const plants = readPlants();
  const { name, species, location, wateringSchedule, notes } = req.body;
  
  if (!name || !species) {
    return res.status(400).json({ error: 'Name and species are required' });
  }

  const newPlant = {
    id: plants.length > 0 ? Math.max(...plants.map(p => p.id)) + 1 : 1,
    name,
    species,
    location: location || '',
    wateringSchedule: wateringSchedule || '',
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  plants.push(newPlant);
  writePlants(plants);
  res.status(201).json(newPlant);
});

// PUT update plant
app.put('/api/plants/:id', (req, res) => {
  const plants = readPlants();
  const index = plants.findIndex(p => p.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Plant not found' });
  }

  const { name, species, location, wateringSchedule, notes } = req.body;
  
  if (!name || !species) {
    return res.status(400).json({ error: 'Name and species are required' });
  }

  plants[index] = {
    ...plants[index],
    name,
    species,
    location: location || '',
    wateringSchedule: wateringSchedule || '',
    notes: notes || '',
    updatedAt: new Date().toISOString()
  };

  writePlants(plants);
  res.json(plants[index]);
});

// DELETE plant
app.delete('/api/plants/:id', (req, res) => {
  const plants = readPlants();
  const filteredPlants = plants.filter(p => p.id !== parseInt(req.params.id));
  
  if (filteredPlants.length === plants.length) {
    return res.status(404).json({ error: 'Plant not found' });
  }

  writePlants(filteredPlants);
  res.json({ message: 'Plant deleted successfully' });
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

