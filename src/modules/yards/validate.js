import * as Yup from "yup";

export const yardSchema = Yup.object({
    Vessel_Type: Yup.object().required("Please choose an option"),
    Sub_Type: Yup.object().required("Please choose an option"),
    Breadth: Yup.number()
        .min(1)
        .max(50000)
        .required("Breadth Required"),
    Length: Yup.number()
        .min(1)
        .max(50000)
        .required("Length Required"),

    Depth: Yup.number()
        .min(1)
        .max(50000)
        .required("Depth Required")

});

