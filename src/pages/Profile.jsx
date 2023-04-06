import { useState } from "react";
import LogoutButton from "./LogOutButton";

function Profile({ currentUser } ) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <h1>User Profile</h1>
      <p>Welcome, {currentUser.username}!</p>
      <LogoutButton onLogout={handleLogout} />
    </>
  );
}
export default Profile;