import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = ` ${process.env.REACT_APP_PROJECT}`;
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
