import { Box, Dialog, DialogActions, Button, Grid, Typography, DialogTitle } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";
import { actions as sliceActions } from "../../slice";
import CustomCard from "../../../../common/components/custom/CustomCard";
import { Form, withFormik } from "formik";
import { FormController } from "../../../../common/components";
import { formatFormData } from "../../../../utils/commonUtils";
import { createStructuredSelector } from "reselect";
import { getSupplierAnalysisForm } from "../../selectors";
import { fetchSupplierResult } from "../../actions";

const OverLaySupplier = ({ handleSubmit, errors }) => {
    const openSupplier = useSelector(state => state[STATE_REDUCER_KEY]).openSupplier;
    const vendorDropDown = useSelector(state => state[STATE_REDUCER_KEY]).vendorDropDown;


    const dispatch = useDispatch();

    const handleClose = () => dispatch(sliceActions.setOpenSupplier(false));
    return <Box>
        <Dialog open={openSupplier} onClose={handleClose} fullWidth maxWidth="lg">
            <DialogTitle>Supplier Analysis</DialogTitle>
            <CustomCard additionalStyle={{ overFlowX: "scroll", py: 3 }}>
                <Form>
                    <Grid container columnSpacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <FormController statusError={true} errorName={errors?.vendor} control="select" name="vendor" label={"Vendor Name"} isMandatory={true} options={vendorDropDown} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button variant="contained" type="submit" onClick={handleSubmit}
                                sx={{ backgroundColor: "#0275D8", fontWeight: 700, fontSize: "12px", minHeight: "20px", maxHeight: "40px", maxWidth: "130px" }}> Get Result</Button>
                        </Grid>
                    </Grid>
                </Form>
            </CustomCard>;
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    <span style={{ color: "red" }}> x </span> <Typography> Close </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    </Box>;
};


const mapStateToProps = createStructuredSelector({
    supplierAnalysisForm: getSupplierAnalysisForm
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(fetchSupplierResult(data))
});

const OverLaySupplierForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.supplierAnalysisForm;
    },
    // validationSchema: vendorSchema,
    handleSubmit: (values, { props: { submit } }) => {
        submit(formatFormData(values));
    },
    displayName: "OverLaySupplierForm"
})(OverLaySupplier);

export default connect(mapStateToProps, mapDispatchToProps)(OverLaySupplierForm);
