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
  return (
    <div>
      <img src="/cart.png"></img>
      <img src={userData.profileImg} alt="profile image" />
      {userData.firstName}
      <form>
        <label htmlFor="name">
          Full Name: {userData.firstName}
          <input type="text" id="name" value={fullName}></input>
        </label>
        <label htmlFor="">
          <input type="" id=""></input>
        </label>
        <label htmlFor="">
          <input type="" id=""></input>
        </label>
        <label htmlFor="">
          <input type="" id=""></input>
        </label>
        <label htmlFor="">
          <input type="" id=""></input>
        </label>
      </form>
    </div>
  );
}

export default UserDashboard;
