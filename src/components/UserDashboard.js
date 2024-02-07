import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import "./UserDashboard.css";

function UserDashboard() {
  const { profile } = useContext(UserContext);
  const [userData, setUserData] = useState({
    firstName: profile?.givenName || "",
    lastName: profile?.familyName || "",
    email: profile?.email || "",
    phone: profile?.phoneNumber || "",
    address: profile?.streetAddress || "",
    postalCode: profile?.postalCode || "",
    city: profile?.locality || "",
    country: profile?.country || "",
    profileImg: profile?.picture || "",
  });
  let fullName = `${userData.firstName} ${userData.lastName}`;
  let locality = `${userData.city}, ${userData.country}`;
  let address = ` ${userData.postalCode}, ${userData.address}`;
  return (
    <div>
      <form className="user-info">
        <img src="/profile.png" className="profile-img" alt="profile image" />
        <img
          src={userData.picture}
          className="profile-img"
          alt="profile image"
        />
        <label htmlFor="name">
          Full Name:
          <input type="text" id="name" value={fullName} disabled></input>
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={userData.email}
            disabled
          ></input>
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="text" id="phone" value={userData.phone} disabled></input>
        </label>
        <label htmlFor="locality">
          Locality:
          <input type="text" id="locality" value={locality} disabled></input>
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" id="address" value={address} disabled></input>
        </label>
      </form>
    </div>
  );
}

export default UserDashboard;
