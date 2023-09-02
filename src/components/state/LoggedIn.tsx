import React, { useState } from 'react';

const LoggedIn = () => {
  const [isLoggedIn, setISLoggedIn] = useState(false);
  const handleLogin = () => {
    setISLoggedIn(true);
  };
  const handleLogout = () => {
    setISLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>;
      <button onClick={handleLogout}>Logout</button>;
      <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
    </div>
  );
};

export default LoggedIn;
