import { Button, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import { FormController } from "../../../common/components";
import { createStructuredSelector } from "reselect";
import { Form, withFormik } from "formik";
import { searchYard } from "../actions";
import { connect, useDispatch } from "react-redux";
import { getVesselSubTypeDropDown, getYardRecommendation } from "../selectors";
import { yardSchema } from "../validate";
import { formatFormData } from "../../../utils/commonUtils";
import { vesselTypeDropDown, subTypeVesselDropDown } from "../constants";
import { actions as sliceActions } from "../slice";

const SearchTab = (props) => {
    const { handleSubmit, vesselSubTypeDropDown = [] } = props;
    const dispatch = useDispatch();
    const handleSubType = (data) => {
        dispatch(sliceActions.setVesselTypeDropDown(subTypeVesselDropDown[data.id] || []));
    };
    return <CustomCard additionalStyle={{ py: 3 }}>
        <Form>
            <Grid container columnSpacing={3} rowSpacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="select" name="Vessel_Type" label={"Vessel Type"} onChangeFromController={handleSubType} options={vesselTypeDropDown} width="90%" isMandatory={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="select" name="Sub_Type" label={"Sub Type"} options={vesselSubTypeDropDown} width="90%" isMandatory={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="input2" name="Length" label={"Length"} isMandatory={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="input2" name="Breadth" label={"Breadth"} isMandatory={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="input2" name="Depth" label={"Depth"} isMandatory={true} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
                    <Button variant="contained" type="submit" onClick={handleSubmit}
                        sx={{ backgroundColor: "#0275D8", fontWeight: 700, fontSize: "12px", minHeight: "20px", maxHeight: "40px", maxWidth: "130px" }}> Get Yard</Button>
                </Grid>
            </Grid>
        </Form>
    </CustomCard>;
};

const mapStateToProps = createStructuredSelector({
    yardRecommendation: getYardRecommendation,
    vesselSubTypeDropDown: getVesselSubTypeDropDown
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(searchYard(data))
});

const YardsRecommendation = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.yardRecommendation;
    },
    validationSchema: yardSchema,
    handleSubmit: (values, { props: { submit } }) => {
        submit(formatFormData(values));
    },
    displayName: "YardsRecommendationByItem"
})(SearchTab);

export default connect(mapStateToProps, mapDispatchToProps)(YardsRecommendation);

