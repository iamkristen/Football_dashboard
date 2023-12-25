import React, { useState } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const UpdateFootballDataForm = () => {
    const location = useLocation();
    const navigator = useNavigate();
    const data = location.state;
    // console.log(data._id);
  const [formData, setFormData] = useState({
    Team: data.Team,
    "Games Played": data["Games Played"],
    Win: data.Win,
    Draw: data.Draw,
    Loss: data.Loss,
    "Goals For": data["Goals For"], 
    "Goals Against": data["Goals Against"], 
    Points: data.Points,
    Year: data.Year,
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
      const response = await axios.post('http://localhost:5000/football/update/'+data._id, formData);
      if(response.data.success === true){
        alert("Data updated successfully.")
        navigator('/show')
      }else{
        alert(response.data.data)
      }
      
      
    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px' }}>Update Data</h2>
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
        <button className="btn btn-success mr-2 mt-3" type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateFootballDataForm;
