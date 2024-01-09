import { Box, Typography } from "@mui/material";
import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingWrapper = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{
                borderRadius: "15px", px: 3, py: 1.8, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }}>
                <ScaleLoader speedMultiplier={1.9} color="#616161" />
                <Typography sx={{ fontWeight: 700, color: "#616161" }}> Maersk Recommendation </Typography>
            </Box>
        </Box >
    );
};

export default LoadingWrapper;
