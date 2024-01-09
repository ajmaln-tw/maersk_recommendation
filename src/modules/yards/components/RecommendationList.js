import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../constants";
import { actions as sliceActions } from "../slice";
import CustomCard from "../../../common/components/custom/CustomCard";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { Typography } from "@mui/material";

const RecommendationList = () => {
    const dispatch = useDispatch();
    const { yardsRecommendationData: { requestInProgress = false, data = "" } = "" } = useSelector(state => state[STATE_REDUCER_KEY]);


    useEffect(() => {
        return (() => dispatch(sliceActions.clearAll()));
    }, []);
    return (
        <LoadingCustomOverlay active={requestInProgress}>
            <CustomCard additionalStyle={{ display: "flex", justifyContent: "center", py: 5 }}>
                {data ? <Typography color="grey.main" sx={{ fontWeight: 700, fontSize: "14px" }}> Best yard for the standard job: {data} </Typography> : <Typography color="grey.main"> No Data Found </Typography>}
            </CustomCard>
        </LoadingCustomOverlay>

    );
};

export default RecommendationList;
