import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../user-management/actions";
import { actions as commonActions } from "../../common/slice";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(commonActions.setNavigator(navigate));
    }, []);

    return <Box sx={{ my: 2, overFlowY: "scroll", mx: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box>
                <Button variant="contained"
                    onClick={() => dispatch(signIn({ username: "ravi2114", password: "ravi2114" }))}
                    sx={{ fontSize: "12px", width: "100px", height: "30px" }}> Generate Token </Button>
            </Box>
        </Box>
    </Box >;

};

export default Home;

