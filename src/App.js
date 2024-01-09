import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

function removeVendorSlashAndCapitalize(str) {
  // Remove "/vendor" slash
  const modifiedStr = str.replace("/", "");

  // Capitalize the first letter
  const capitalizedStr = modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);

  return capitalizedStr;
}
function App() {
  const location = useLocation();

  const title = removeVendorSlashAndCapitalize(location.pathname);
  useEffect(() => {
    document.title = ` ${title} - Recommendation Engine`;
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
