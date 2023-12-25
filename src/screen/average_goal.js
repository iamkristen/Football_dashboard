import React, { useState } from 'react';
import axios from 'axios';

const FootballStats = () => {
  const [year, setYear] = useState('');
  const [averageGoals, setAverageGoals] = useState(null);
  const [teams, setTeams] = useState([]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/football/teams-average-goals/${year}`);
      const { averageGoalsFor, teams } = response.data;
console.log(averageGoals,teams)
      setAverageGoals(averageGoalsFor);
      setTeams(teams);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div m-3>
      <form onSubmit={handleSubmit}>
        <label  className="form-label">
          Enter Year
          <input className='form-control' type="number" value={year} onChange={handleYearChange} />
        </label>
        
        <button className='btn btn-primary m-3' type="submit">Get Average Goals</button>
      </form>
      {averageGoals !== null && (
        <div>
          <h3>Average Goals For {year}</h3>
          <p>Average Goal of this year: {averageGoals}</p>

          <h4>Teams</h4>
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
             
            </tr>
          </thead>
        <tbody>
          {teams.map((item, index) => (
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
             

            </tr>
          ))}
        </tbody>
      </table>
          {/* <ul>
            {teams.map((team) => (
              <li key={team._id}>
                Team: {team.Team}, Goals For: {team['Goals For']}
              </li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default FootballStats;
