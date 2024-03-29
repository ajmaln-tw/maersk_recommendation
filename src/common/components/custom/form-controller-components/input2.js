import { Box, Grid, IconButton, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import { FORM_CONTROL_STYLE_ALT } from "./style";
import TextErrorType3 from "./TextErrorType3";

function Input2(props) {
    const { label, name, icon, onClick, sx = {}, errorName = "", statusError = false, onChangeText, onChangeFromController, digitsOnly = false, isMandatory = false, upperCase = false, ...rest } = props;
    return (
        <Grid container sx={{ ...FORM_CONTROL_STYLE_ALT, ...sx }}>
            <Grid item xs={12} sm={12} md={6}>
                <InputLabel sx={{ fontWeight: 700 }} htmlFor={name}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Field name={name} sx={{ height: "20px" }}>
                    {({ form, field }) => {
                        const { handleChange } = form;
                        const customHandleChange = (e) => {
                            onChangeText && onChangeText(e.target.value);
                            const regex = /^[0-9\b]+$/;
                            if (!digitsOnly) {
                                handleChange(e);
                            }
                            if (digitsOnly && e.target.value === "" || regex.test(e.target.value.toLowerCase())) {
                                handleChange(e);
                            } else if (upperCase) {
                                e.target.value = e.target.value.toUpperCase();
                                handleChange(e);
                            }
                        };
                        onChangeFromController && onChangeFromController(form.values[name]);
                        return (
                            <>
                                <TextField
                                    id={name}
                                    {...field}
                                    {...rest}
                                    size="medium"
                                    onChange={customHandleChange}
                                    autoComplete="new-password"
                                    sx={{
                                        height: "12px",
                                        borderRadius: "10px",
                                        borderColor: "#000",
                                        "& .MuiInputBase-input.Mui-disabled": {
                                            WebkitTextFillColor: "#ff"
                                        },
                                        maxWidth: "400px"
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {icon && <IconButton onClick={onClick} edge="end"> {icon}</IconButton>}
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Box sx={{ display: "block" }}>
                                    {statusError ? <Typography variant="p" sx={{ color: "error.main", lineHeight: 0 }}>{errorName}</Typography> :
                                        <ErrorMessage component={TextErrorType3} name={name} />}
                                </Box>

                            </>
                        );
                    }}
                </Field>

            </Grid>
        </Grid >
    );
}

export default Input2;
