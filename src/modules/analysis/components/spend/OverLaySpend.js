import { Box, Dialog, DialogActions, Button, Grid, Typography, DialogTitle, LinearProgress } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";
import { actions as sliceActions } from "../../slice";
import CustomCard from "../../../../common/components/custom/CustomCard";
import { Form, withFormik } from "formik";
import { FormController } from "../../../../common/components";
import { formatFormData } from "../../../../utils/commonUtils";
import { createStructuredSelector } from "reselect";
import { getSpendAnalysisForm } from "../../selectors";
import { fetchSpendAnalysisResult } from "../../actions";

const OverLaySpend = ({ handleSubmit, errors }) => {
    const openSpend = useSelector(state => state[STATE_REDUCER_KEY]).openSpend;
    const impaDropDown = useSelector(state => state[STATE_REDUCER_KEY]).impaDropDown;
    const item_sec1DropDown = useSelector(state => state[STATE_REDUCER_KEY].item_sec1DropDown);
    const item_sec2DropDown = useSelector(state => state[STATE_REDUCER_KEY]).item_sec2DropDown;
    const itemDropDown = useSelector(state => state[STATE_REDUCER_KEY]).itemDropDown;
    const loading = useSelector(state => state[STATE_REDUCER_KEY].table.spendAnalysisResult.requestInProgress);

    const dispatch = useDispatch();

    const handleClose = () => dispatch(sliceActions.setOpenSpend(false));
    return <Box>
        <Dialog open={openSpend} onClose={handleClose} fullWidth maxWidth="lg">
            <DialogTitle>Spend Analysis</DialogTitle>
            <CustomCard additionalStyle={{ overFlowX: "scroll", py: 3 }}>
                <Form>
                    <Grid container columnSpacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <FormController statusError={true} errorName={errors?.item_cat} isMandatory={true} control="select" name="item_cat" label={"Item Category"} options={impaDropDown} placeholder="Enter Category" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <FormController statusError={true} errorName={errors?.item_sec1} isMandatory={true} control="select" name="item_sec1" label={"Item Section 1"} options={item_sec1DropDown} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <FormController statusError={true} errorName={errors?.item_sec2} isMandatory={true} control="select" name="item_sec2" label={"Item Section 2"} options={item_sec2DropDown} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <FormController statusError={true} errorName={errors?.item} control="select" name="item" label={"Item Name"} options={itemDropDown} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button variant="contained" type="submit" onClick={handleSubmit}
                                sx={{ backgroundColor: "#0275D8", fontWeight: 700, fontSize: "12px", minHeight: "20px", maxHeight: "40px", maxWidth: "130px" }}> Get Result</Button>
                        </Grid>
                    </Grid>
                </Form>
            </CustomCard>
            {loading && <LinearProgress />}
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    <span style={{ color: "red" }}> x </span> <Typography> Close </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    </Box>;
};


const mapStateToProps = createStructuredSelector({
    spendAnalysisForm: getSpendAnalysisForm
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(fetchSpendAnalysisResult(data))
});


const OverLaySpendForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.spendAnalysisForm;
    },
    // validationSchema: vendorSchema,
    handleSubmit: (values, { props: { submit } }) => {
        submit(formatFormData(values));
    },
    displayName: "OverLaySpendForm"
})(OverLaySpend);

export default connect(mapStateToProps, mapDispatchToProps)(OverLaySpendForm);
