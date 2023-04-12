import React from "react";
import { Avatar } from "@mui/material";
import "./Navbar.css";

import Followers from "../followers/Followers";
function navbar() {
  return (
    <div className="nav">
    <div className="navbar">
      <div className="leftsidenavbar flex align-item-center">
        <Avatar
          className="user-profle-pic"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
        />
        <div className="profile_nameportion flex flexDcolumn">
          <h2 className="profile-user-greet">Hello!</h2>
          <h1 className="profile-user-name">Rahul Siloniya</h1>
          <h2 className="profile-user-email">rahulsiloniya9805@gmail.com</h2>
        </div>
      </div>
      <div className="followers">
        <Followers />
      </div>
    </div>
    </div>
  );
}

export default navbar;
