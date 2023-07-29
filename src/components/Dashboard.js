import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (authenticated == "false") {
   <div>
          <p>NOt  authenticated</p>
        </div>
  //return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};


export default Dashboard