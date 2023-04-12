import React, { useState } from "react";
import '../css/component/topbar.css'
// import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logout from "../pages/LogOut";


function Topbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.reload();
  };


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OpenReplay</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          {isLoggedIn ? (
            <Logout isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;