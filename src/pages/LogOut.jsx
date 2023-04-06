import React from "react";

function Logout({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // remove the user from local storage
    onLogout(); // call the onLogout prop function to update the app state
  };

  return (
    <button onClick={handleLogout} className="logout_button">
      Logout
    </button>
  );
}

export default Logout;