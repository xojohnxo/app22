import React from "react";

function Logout({ isLoggedIn ,onLogout }) {

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); 
    onLogout();  
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : null}
    </>
  );
}

export default Logout;
