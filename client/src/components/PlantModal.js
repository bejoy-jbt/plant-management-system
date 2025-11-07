import React from 'react';
import PlantForm from './PlantForm';
import './PlantModal.css';

const PlantModal = ({ plant, onSave, onClose }) => {
  const handleSave = (id, plantData) => {
    if (id) {
      onSave(id, plantData);
    } else {
      onSave(plantData);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{plant ? 'Edit Plant' : 'Add New Plant'}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <PlantForm
            plant={plant}
            onSubmit={handleSave}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantModal;

