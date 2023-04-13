import React from "react";

function Logout({onLogout }) {

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
    
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
