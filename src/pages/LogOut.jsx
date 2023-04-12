import React from "react";

function Logout({onLogout }) {

  const handleLogout = () => {
    localStorage.clear();
    onLogout();  
    console.log();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
