// UserList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios here

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Use useEffect to perform the API call when the component mounts
    async function fetchUsers() {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        setUsers(response.data); // Update state with fetched data
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    }

    fetchUsers(); // Invoke the function to fetch users when the component mounts

    // If you need to include dependencies, pass them in the dependency array
    // Example: useEffect(fetchUsers, [dependency]);
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <div>
      {/* Display users */}
      {users.map((user) => (
        <div key={user.id}>
          {/* Display user details */}
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
