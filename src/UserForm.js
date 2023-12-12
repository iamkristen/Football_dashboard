import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddFootballDataForm = () => {
  const [formData, setFormData] = useState({
    Team: '',
    "Games Played": 0,
    Win: 0,
    Draw: 0,
    Loss: 0,
    "Goals For": 0,
    "Goals Against": 0,
    Points: 0,
    Year: 2023,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'Year' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/football/add/', formData);
      console.log('Success:', response.data);
      
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Football Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="teamInput" className="form-label">Name:</label>
            <input type="text" className="form-control" id="teamInput" name="Team" value={formData.Team} onChange={handleInputChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Games Played</label>
              <input type="number" className="form-control" name="GamesPlayed" value={formData.GamesPlayed} onChange={handleInputChange} />
            </div>
            {/* Add other form groups in this column */}
            <div className="form-group">
              <label className="form-label">Win</label>
              <input type="number" className="form-control" name="Win" value={formData.Win} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Points</label>
              <input type="number" className="form-control" name="Points" value={formData.Points} onChange={handleInputChange} />
            </div>
            
          </div>
          <div className="col-md-4">
            {/* Add form groups for the second column */}
            <div className="form-group">
              <label className="form-label">Draw</label>
              <input type="number" className="form-control" name="Draw" value={formData.Draw} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Loss</label>
              <input type="number" className="form-control" name="Loss" value={formData.Loss} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Year</label>
              <input type="number" className="form-control" name="Year" value={formData.Year} onChange={handleInputChange} />
            </div>
          </div>
          
          <div className="col-md-4">
           
            <div className="form-group">
              <label className="form-label">Goals For</label>
              <input type="number" className="form-control" name="GoalsFor" value={formData.GoalsFor} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Goals Against</label>
              <input type="number" className="form-control" name="GoalsAgainst" value={formData.GoalsAgainst} onChange={handleInputChange} />
            </div>
           
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFootballDataForm;
