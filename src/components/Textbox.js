import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import React from "react";

export const TextBox = ({className, icon, placeholder, onChange, value, onBlur}) => (
    <FormControl  className={className} variant="outlined">
        <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        edge="end"
                    >
                        {icon}
                    </IconButton>
                </InputAdornment>
            }
            labelWidth={0}
        />
    </FormControl>
);
