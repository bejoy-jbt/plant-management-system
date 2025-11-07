import React, { useState, useEffect } from 'react';
import './PlantForm.css';

const PlantForm = ({ plant, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    location: '',
    wateringSchedule: '',
    notes: ''
  });

  useEffect(() => {
    if (plant) {
      setFormData({
        name: plant.name || '',
        species: plant.species || '',
        location: plant.location || '',
        wateringSchedule: plant.wateringSchedule || '',
        notes: plant.notes || ''
      });
    }
  }, [plant]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plant) {
      onSubmit(plant.id, formData);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="plant-form">
      <div className="form-group">
        <label htmlFor="name">Plant Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g., Monstera Deliciosa"
        />
      </div>

      <div className="form-group">
        <label htmlFor="species">Species *</label>
        <input
          type="text"
          id="species"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
          placeholder="e.g., Monstera"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Living Room"
        />
      </div>

      <div className="form-group">
        <label htmlFor="wateringSchedule">Watering Schedule</label>
        <input
          type="text"
          id="wateringSchedule"
          name="wateringSchedule"
          value={formData.wateringSchedule}
          onChange={handleChange}
          placeholder="e.g., Every 3 days"
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          placeholder="Additional notes about the plant..."
        />
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success">
          {plant ? 'Update Plant' : 'Add Plant'}
        </button>
      </div>
    </form>
  );
};

export default PlantForm;

