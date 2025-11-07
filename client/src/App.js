import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PlantList from './components/PlantList';
//import PlantForm from './components/PlantForm';
import PlantModal from './components/PlantModal';

const API_URL = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api');

function App() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPlant, setEditingPlant] = useState(null);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`${API_URL}/plants`);
      setPlants(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching plants:', error);
      setLoading(false);
    }
  };

  const handleAddPlant = async (plantData) => {
    try {
      const response = await axios.post(`${API_URL}/plants`, plantData);
      setPlants([...plants, response.data]);
      setShowModal(false);
    } catch (error) {
      console.error('Error adding plant:', error);
      alert('Error adding plant. Please try again.');
    }
  };

  const handleUpdatePlant = async (id, plantData) => {
    try {
      const response = await axios.put(`${API_URL}/plants/${id}`, plantData);
      setPlants(plants.map(plant => plant.id === id ? response.data : plant));
      setEditingPlant(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error updating plant:', error);
      alert('Error updating plant. Please try again.');
    }
  };

  const handleDeletePlant = async (id) => {
    if (window.confirm('Are you sure you want to delete this plant?')) {
      try {
        await axios.delete(`${API_URL}/plants/${id}`);
        setPlants(plants.filter(plant => plant.id !== id));
      } catch (error) {
        console.error('Error deleting plant:', error);
        alert('Error deleting plant. Please try again.');
      }
    }
  };

  const handleEditClick = (plant) => {
    setEditingPlant(plant);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setEditingPlant(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPlant(null);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🌱 Plant Management System</h1>
          <button className="btn btn-primary" onClick={handleAddClick}>
            + Add New Plant
          </button>
        </header>

        {loading ? (
          <div className="loading">Loading plants...</div>
        ) : (
          <PlantList
            plants={plants}
            onEdit={handleEditClick}
            onDelete={handleDeletePlant}
          />
        )}

        {showModal && (
          <PlantModal
            plant={editingPlant}
            onSave={editingPlant ? handleUpdatePlant : handleAddPlant}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;

