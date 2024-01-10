import { Grid, InputLabel, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import { FORM_CONTROL_STYLE_ALT } from "./style";
import TextError from "./TextError";

function CustomSelect(props) {
  const { name = "", options = [], multiple = false, label = "", errorName = "", statusError = false, onChangeFromController, disabled = false, isMandatory = false, ...rest } = props;
  return (
    <Grid container sx={FORM_CONTROL_STYLE_ALT}>
      <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
        <InputLabel sx={{ fontWeight: 700 }} htmlFor={name}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Field
          as='select'
          name={name}
        >
          {
            ({ field, form }) => {
              return (
                <>
                  <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: state.isFocused ? "1px solid #0784D6" : "1px solid #000",
                        boxShadow: "none",
                        color: "#000",
                        fontSize: "12px",
                        height: "12px",
                        maxWidth: "450px",
                        fontWeight: 400,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F8F8F8",
                        "&:hover": {
                          borderColor: "#000"
                        }
                      }),
                      option: (provided) => ({
                        ...provided,
                        maxHeight: "70px", fontSize: "10px"
                      })
                    }}
                    {...field}
                    {...rest}
                    id={name}
                    options={options}
                    onChange={value => {
                      onChangeFromController && onChangeFromController(value);
                      form.setFieldValue(field.name, value);
                    }}
                    isDisabled={disabled}
                    dropdownHeight={600}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    isMulti={multiple}
                    name={name}
                  />
                  {statusError ? <Typography variant="p" sx={{ color: "red.main", mt: 1, lineHeight: 0 }}>{errorName}</Typography> :
                    <ErrorMessage component={TextError} name={name} />}
                </>
              );
            }
          }
        </Field>
      </Grid>

    </Grid >
  );
}

export default CustomSelect;
