import * as Yup from "yup";

export const vendorSchema = Yup.object({
    delivery_port: Yup.object().required("Please choose an option"),
    item_code: Yup.object().required("Please choose an option")

});

