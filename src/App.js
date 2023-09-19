import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import UserCard from './components/Usercard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onGetUsers={handleGetUsers} />
      {loading ? <p>Loading...</p> :
        <Grid>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </Grid>
      }
    </div>
  );
}

export default App;
