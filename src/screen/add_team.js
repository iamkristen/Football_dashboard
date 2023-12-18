import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddFootballDataForm = () => {
  const [formData, setFormData] = useState({
    Team: '',
    'Games Played': 0,
    Win: 0,
    Draw: 0,
    Loss: 0,
    'Goals For': 0,
    "Goals Against": 0,
    Points: 0,
    Year: 2023,
  });

  const navigate = useNavigate();
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
      alert("Data created successfully.")
      navigate('/')

      
    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px' }}>Add Football Data</h2>
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
              <input type="number" className="form-control" name="Games Played" value={formData["Games Played"]} onChange={handleInputChange} />
            </div>
            
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
              <input type="number" className="form-control" name="Goals For" value={formData["Goals For"]} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Goals Against</label>
              <input type="number" className="form-control" name="Goals Against" value={formData["Goals Against"]} onChange={handleInputChange} />
            </div>
           
          </div>
        </div>
        <button className="btn btn-success mt-3" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFootballDataForm;
