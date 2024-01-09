import * as Yup from "yup";

export const sparesSchema = Yup.object({
    vessel_object_id: Yup.object().required("Please choose an option"),
    equipment: Yup.object().required("Please choose an option"),
    job_plan: Yup.object().required("Please choose an option")
});

