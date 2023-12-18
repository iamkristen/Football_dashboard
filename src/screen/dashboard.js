import { useState } from "react";
import {API} from '../constants/api_constant';
import axios from 'axios';

function Dashboard(){

    const [year,setYear] = useState('2022');
    const [data,setData] = useState({
        totalGamesPlayed: 0,
        totalDraw:0,
        totalWin:0
    })


    const fetchDataByYear = ()=> {
                axios.get(API.baseURL + API.football + API.getDataByYear+year)
                .then(response => {
                if (response.data.success === true) {
                    console.log(response.data.data[0])
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
      const handleGo = ()=>{
        fetchDataByYear();

      }


    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px' }}>Football Stats</h2>
            <div className="d-flex flex-row">
    <div className="card col-md-8 me-3">
        <div className="card-header">
        
            <div className="col-md-3">
                <input type="number" className="form-control" placeholder="Year" value={year} onChange={handleYear}/>
            </div>
            <div className="col-md-3 col mt-2 d-flex">
                <button className="btn btn-primary" onClick={handleGo}>GO</button>
            </div>
            Statistics for {year}
        </div>
        <div className="card-body">
          <p>Total Games Played: {data.totalGamesPlayed}</p>
          <p>Total Wins: {data.totalWin}</p>
          <p>Total Draw: {data.totalDraw}</p>
        </div>
    </div>
    <div className="card">
        <div className="card-header">
        
            Statistics for {year}
        </div>
        <div className="card-body">
          <p>Total Games Played: {data.totalGamesPlayed}</p>
          <p>Total Wins: {data.totalWin}</p>
          <p>Total Draw: {data.totalDraw}</p>
        </div>
    </div> 
    </div>
        </div>
    )
}

export default Dashboard;