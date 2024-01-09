import { Button, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import { FormController } from "../../../common/components";
import { createStructuredSelector } from "reselect";
import { Form, withFormik } from "formik";
import { searchSpare } from "../actions";
import { connect, useDispatch } from "react-redux";
import { getEquipmentDropDown, getSparesRecommendation } from "../selectors";
import { sparesSchema } from "../validation";
import { formatFormData } from "../../../utils/commonUtils";
import { equipmentDropDownObj, jobPlanDropDown, vesselDropDown } from "../constants";
import { actions as sliceActions } from "../slice";

const SearchTab = (props) => {
    const { handleSubmit, equipmentDropDown = [] } = props;
    const dispatch = useDispatch();
    const handleEquipType = (data) => {
        dispatch(sliceActions.setEquipmentDropDown(equipmentDropDownObj[data.name] || []));
    };
    return <CustomCard >
        <Form>
            <Grid container columnSpacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="select" name="vessel_object_id" label={"Vessel"} options={vesselDropDown} onChangeFromController={handleEquipType} placeholder="Select Vessel" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="select" name="equipment" label={"Equipment"} options={equipmentDropDown} placeholder="Select Equipment" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormController control="select" name="job_plan" label={"Job Plan"} options={jobPlanDropDown} placeholder="Select Job plan" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Button variant="contained" type="submit" onClick={handleSubmit}
                        sx={{ backgroundColor: "#0275D8", fontWeight: 700, fontSize: "12px", minHeight: "20px", maxHeight: "40px", maxWidth: "130px" }}> Get Spares</Button>
                </Grid>
            </Grid>
        </Form>
    </CustomCard>;
};

const mapStateToProps = createStructuredSelector({
    sparesRecommendation: getSparesRecommendation,
    equipmentDropDown: getEquipmentDropDown
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(searchSpare(data))
});

const sparesRecommendation = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.sparesRecommendation;
    },
    validationSchema: sparesSchema,
    handleSubmit: (values, { props: { submit } }) => {
        submit(formatFormData(values));
    },
    displayName: "sparesRecommendationByItem"
})(SearchTab);

export default connect(mapStateToProps, mapDispatchToProps)(sparesRecommendation);

