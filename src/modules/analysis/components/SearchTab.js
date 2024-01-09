import { Button, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import { FormController } from "../../../common/components";
import { createStructuredSelector } from "reselect";
import { Form, withFormik } from "formik";
import { searchVessel } from "../actions";
import { connect } from "react-redux";
import { getVesselRecommendation } from "../selectors";

import { vendorSchema } from "../validator";
import { formatFormData } from "../../../utils/commonUtils";
import deliveryPortDropDownList from "../DeliveryPort.json";
import itemCodeDropDownList from "../itemName.json";
const SearchTab = (props) => {
    const { handleSubmit, errors = {} } = props;
    return <CustomCard additionalStyle={{ overFlowX: "scroll", py: 3 }}>
        <Form>
            <Grid container columnSpacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController statusError={true} errorName={errors?.email} isMandatory={true} control="select" name="delivery_port" label={"Delivery Port"} options={deliveryPortDropDownList} placeholder="Enter Port Name" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController statusError={true} errorName={errors?.email} isMandatory={true} control="select" name="item_code" label={"Item"} options={itemCodeDropDownList} placeholder="Select Item" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Button variant="contained" type="submit" onClick={handleSubmit}
                        sx={{ backgroundColor: "#0275D8", fontWeight: 700, fontSize: "12px", minHeight: "20px", maxHeight: "40px", maxWidth: "130px" }}> Get Vendors</Button>
                </Grid>
            </Grid>
        </Form>
    </CustomCard>;
};

const mapStateToProps = createStructuredSelector({
    vesselRecommendation: getVesselRecommendation
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(searchVessel(data))
});

const VesselRecommendation = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.vesselRecommendation;
    },
    validationSchema: vendorSchema,
    handleSubmit: (values, { props: { submit } }) => {
        submit(formatFormData(values));
    },
    displayName: "vesselRecommendationByItem"
})(SearchTab);

export default connect(mapStateToProps, mapDispatchToProps)(VesselRecommendation);

