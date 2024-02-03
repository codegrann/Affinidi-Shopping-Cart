import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
  let fullName = `${userData.firstName}  ${userData.lastName}`;
  let locality = `${userData.city}, ${userData.country}`;
  return (
    <div>
      <img src="/cart.png"></img>
      <img src={userData.profileImg} alt="profile image" />
      <form>
        <label htmlFor="name">
          Full Name:
          <input type="text" id="name" value={fullName}></input>
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" value={userData.email}></input>
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="text" id="phone" value={userData.phone}></input>
        </label>
        <label htmlFor="locality">
          <input type="text" id="locality" value={locality}></input>
        </label>
        <label htmlFor="">
          <input type="" id=""></input>
        </label>
      </form>
    </div>
  );
}

export default UserDashboard;
