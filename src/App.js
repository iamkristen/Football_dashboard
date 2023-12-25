import React from 'react';
import AddTeam from './screen/add_team';
import UpdateForm from './screen/update_team';
import UserList from './screen/show_team';
import Dashboard from './screen/dashboard';
import AverageGoal from './screen/average_goal'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/show" element={<UserList/>} />
          <Route path="/average_goal" element={<AverageGoal/>} />
          <Route path="/add" element={<AddTeam />} />
          <Route path="/update" element={<UpdateForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
