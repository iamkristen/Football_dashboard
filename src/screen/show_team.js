import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API} from '../constants/api_constant';
import { useNavigate } from 'react-router-dom';

function FootballStats() {
  const [footballData, setFootballData] = useState([]);
  const [wonValue, setwonValue] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (wonvalue) => {
    if(wonvalue === undefined){
      axios.get(API.baseURL + API.football + API.getData)
      .then(response => {
        if (response.data.success === true) {
          setFootballData(response.data.data);
        }
      })
      .catch(error => console.error('Error:', error));
    }else{
        axios.get(API.baseURL + API.football + API.getData+"?wonValue="+wonvalue)
        .then(response => {
        if (response.data.success === true) {
          setFootballData(response.data.data);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  };

  const handleEdit = (item) => {
    navigate('/update', { state: item });
  };

  const handleDelete = (item) => {
    const res = window.confirm("Are you sure?");
    if (res === true) {
      axios.post(API.baseURL + API.football + API.deleteData + item._id)
        .then(response => {
          if (response.data.success === true) {
            alert("Data Deleted successfully.");
            fetchData();
          } else {
            alert(response.data.data);
          }
        });
    }
  };
  const handleAddGame=()=>{
    navigate('/add');
  }
  const handleFilterWonValue=(e)=>{
    const value = e.target.value;
    setwonValue(value)
  }
  const handleGo = ()=>{
    fetchData(wonValue);
  }

  return (
    <div className="container mt-4">
      <div className="row mb-3">
      <div className="col-md-6 d-flex">
    <button className="btn btn-primary" onClick={handleAddGame}>Add Game</button>
  </div>
  <div className="col-md-3">
    <input type="number" className="form-control" placeholder="Won value"  onChange={handleFilterWonValue}/>
  </div>
  <div className="col-md-3 d-flex">
    <button className="btn btn-primary" onClick={handleGo}>GO</button>
  </div>
  
</div>
      <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Games Played</th>
              <th scope="col">Win</th>
              <th scope="col">Draw</th>
              <th scope="col">Loss</th>
              <th scope="col">Goals For</th>
              <th scope="col">Goals Against</th>
              <th scope="col">Points</th>
              <th scope="col">Year</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
        <tbody>
          {footballData.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.Team}</td>
              <td>{item["Games Played"]}</td>
              <td>{item.Win}</td>
              <td>{item.Draw}</td>
              <td>{item.Loss}</td>
              <td>{item["Goals For"]}</td>
              <td>{item["Goals Against"]}</td>
              <td>{item.Points}</td>
              <td>{item.Year}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Button group">
                  <button className="btn btn-secondary" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FootballStats;
