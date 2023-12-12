// App.js

import React from 'react';
import UserForm from './UserForm'; // Import UserForm component from the relative path
import UserList from './UserList'; // Import UserList component from the relative path

const App = () => {
  return (
    <div>
      <UserForm /> {/* Render the UserForm component */}
      {/* <UserList /> Render the UserList component */}
    </div>
  );
};

export default App;
