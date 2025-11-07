import React from "react";
import "./PlantList.css";

const PlantList = ({ plants = [], onEdit, onDelete }) => {
  console.log("Received plants in PlantList:", plants);

  // ✅ Extra safety: If plants is not an array, show error
  if (!Array.isArray(plants)) {
    return (
      <div className="empty-state">
        <p>Error: Plant data must be an array.</p>
      </div>
    );
  }

  // ✅ Show empty state
  if (plants.length === 0) {
    return (
      <div className="empty-state">
        <p>No plants found. Add your first plant to get started!</p>
      </div>
    );
  }

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <div key={plant.id || plant._id} className="plant-card">
          <div className="plant-header">
            <h2>{plant.name}</h2>
            <div className="plant-actions">
              <button
                className="btn btn-secondary"
                onClick={() => onEdit(plant)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(plant.id || plant._id)}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="plant-details">
            <div className="detail-item">
              <strong>Species:</strong> {plant.species}
            </div>

            {plant.location && (
              <div className="detail-item">
                <strong>Location:</strong> {plant.location}
              </div>
            )}

            {plant.wateringSchedule && (
              <div className="detail-item">
                <strong>Watering Schedule:</strong> {plant.wateringSchedule}
              </div>
            )}

            {plant.notes && (
              <div className="detail-item">
                <strong>Notes:</strong> {plant.notes}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
