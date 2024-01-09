import { Typography } from "@mui/material";

const TextErrorType3 = (props) =>
    <Typography sx={{ color: "error.main", position: "relative", bottom: "-12px" }} color="error.main" variant="p" >
        {props.children}
    </Typography>;

export default TextErrorType3;
