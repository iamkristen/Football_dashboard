import { useState } from "react";
import {API} from '../constants/api_constant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard(){

    const [year,setYear] = useState('2022');
    const [data,setData] = useState({
        totalGamesPlayed: 'N/A',
        totalDraw:'N/A',
        totalWin:'N/A'
    })

    const navigate = useNavigate();

    const fetchDataByYear = ()=> {
                axios.get(API.baseURL + API.football + API.getDataByYear+year)
                .then(response => {
                if (response.data.success === true) {
                    setData(response.data.data[0]);
                }
              })
              .catch(error => console.error('Error:', error));
            };
       fetchDataByYear();   
    const handleYear=(e)=>{
        const value = e.target.value;
        setYear(value)
      }
      const handleShowStatsClick = () => {
        navigate('/show');
      };

      const handleAverageGoalsClick = () => {
        navigate('/show');
      };


    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px' }}>Football Stats</h2>
            <div style={{ display: 'flex'}}>
  <button className="btn btn-secondary mb-3" onClick={handleShowStatsClick} style={{ cursor: 'pointer' }}>Show Football Stats</button>
  <div style={{ width: '10px' }}></div>
  <button className="btn btn-secondary mb-3" onClick={handleAverageGoalsClick} style={{ cursor: 'pointer' }}>Check Football Average Goals</button>
</div>

            <div className="card col-md-8 me-3">
            <div className="card-header">
            <div className="col-md-3">
                <input type="number" className="form-control" placeholder="Year" value={year} onChange={handleYear}/>
            </div>
              Statistics for {year}
            </div>
        
            <div className="card-body">
              <p>Total Games Played: {data && data.totalGamesPlayed !== undefined ? data.totalGamesPlayed : 'N/A'}</p>
              <p>Total Wins: {data && data.totalWin !== undefined ? data.totalWin : 'N/A'}</p>
              <p>Total Draw: {data && data.totalDraw !== undefined ? data.totalDraw : 'N/A'}</p>
            </div>
          </div>
      </div>
    )
}

export default Dashboard;