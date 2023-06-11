import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchAutoComplete = (props) => {
  const [loading, setLoading] = useState(false);
  const handleOnChange = (event) => {
    setLoading(true);
    props.handleChange(event.target.value);
  };
  return (
    <Autocomplete
      disablePortal
      id={props.id}
      options={props.options ? props.options : []}
      sx={{ width: "100%" }}
      value={props.value ? props.value : null}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          onChange={handleOnChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {props.loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchAutoComplete;
