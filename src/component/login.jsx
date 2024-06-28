import React, { useState } from "react"; 
import axios from 'axios'; 

function Login() {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState('');

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', {
      userName,
        password
      });
      if (response.status === 200) {
        // navigate('/login');
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: '400px',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #ccc',
          height: '150px',
          borderRadius: '5px',
          alignItems: "center",
          marginLeft: '500px',
          gap: '15px',
          backgroundColor:"lightblue"
        }}
        onSubmit={handleSubmit} // Use onSubmit for form submission
      >
        <input type="text"placeholder="Username"value={userName}onChange={handleNameChange}
        />
        <input type="password"placeholder="Password"value={password}onChange={handlePasswordChange}
        />
        <button type="submit">Login</button> {/* Use type="submit" for the button */}
      </form>
    </div>
  );
}

export default Login;