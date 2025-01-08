'use client';

import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (!username.trim()) {
      alert('Please enter a username.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
}
