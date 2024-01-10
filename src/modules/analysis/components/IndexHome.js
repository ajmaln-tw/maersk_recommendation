import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as commonSliceActions } from "../../common/slice";
import { actions as sliceAction } from "../slice";
import OverLaySpend from "./spend/OverLaySpend";
import OverLayTrend from "./trend/OverLayTrend";
import OverLaySupplier from "./supplier/OverLaySupplier";
import TableWrapper from "./TableWrapper";

const boxStyle = {
    border: "1px solid black", borderRadius: "15px", display: "flex",
    justifyContent: "center", alignItems: "center", width: "220px",
    backgroundColor: "white.main", color: "dark.main",
    height: "120px",
    "&:hover": {
        backgroundColor: "primary.dark",
        cursor: "pointer",
        transition: "ease-in 100ms",
        color: "white.main"
    }
};
const BoxComponent = ({ title = "", onClick }) => <Box sx={boxStyle} onClick={onClick}>
    <Box>
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}> {title} </Typography>
    </Box>
</Box>;

const IndexHome = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonSliceActions.setModulePath(pathname));
        return () => dispatch(sliceAction.clearAll());
    }, []);
    const handleSpendAnalysis = () => dispatch(sliceAction.setOpenSpend(true));
    const handleTrendAnalysis = () => dispatch(sliceAction.setOpenTrend(true));
    const handleSupplierEvaluation = () => dispatch(sliceAction.setOpenSupplier(true));


    return <Box sx={{ my: 2, overFlowY: "scroll", px: 5, mx: 1 }}>
        <Grid container columnSpacing={3} sx={{ display: "flex", justifyContent: "center", my: 3, alignItems: "center", px: 2 }}>
            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                <BoxComponent title="Spend Analysis" onClick={handleSpendAnalysis} />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                <BoxComponent title="Trend Analysis" onClick={handleTrendAnalysis} />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                <BoxComponent title="Supplier Evaluation" onClick={handleSupplierEvaluation} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
                <TableWrapper />
            </Grid>
        </Grid>
        <OverLaySpend />
        <OverLayTrend />
        <OverLaySupplier />
    </Box >;

};

export default IndexHome;
