import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = ` ${process.env.REACT_APP_PROJECT}`;
    if (location.pathname === "/") {
      navigate("/analysis");
    }
  }, [location]);
  return (
    <Typography className="app" component="div">
      <DashboardLayout >
        <Outlet />
      </DashboardLayout >
    </Typography>
  );
}

export default App;
