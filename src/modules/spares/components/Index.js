import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SearchTab from "./SearchTab";
import RecommendationList from "./RecommendationList";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as sliceAction } from "../slice";
import { actions as commonSliceActions } from "../../common/slice";
const IndexHome = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonSliceActions.setModulePath(pathname));
        return () => dispatch(sliceAction.clearAll());
    }, []);

    return <Box sx={{ my: 2, overFlowY: "scroll", mx: 1 }}>
        <Grid container columnSpacing={2} sx={{ display: "flex", justifyContent: "center", my: 3, alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
                <SearchTab />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
                <RecommendationList />
            </Grid>

        </Grid>

    </Box >;

};

export default IndexHome;
