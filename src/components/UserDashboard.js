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
    profileUrl: profile?.imageURI || "",
  });
  return (
    <div>
      <img src={userData.imageURI}></img>
      <table>
        <tr>
          <th>{userData.phoneNumber}</th>
        </tr>
        <tr>
          <td>{userData.firstName}</td>
        </tr>
      </table>
    </div>
  );
}

export default UserDashboard;
