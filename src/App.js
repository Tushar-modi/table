import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.users); // Assuming the API response has a 'users' property containing an array of user data
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const tableHeaders = Object.keys(userData[0] || {}); // Get the keys of the first user object as headers

  return (
    <div className="App">
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              {tableHeaders.map((header) => (
                <td key={header}>{user[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
