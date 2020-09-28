import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  display: "flex",
  flexDirection:"column"
};

export default function CheckBoxAndLikesField(props) {
  const displayLikes = props.showLikes ? "visible" : "hidden";
  return (
    <div style={styles}>
      <FormControlLabel
        control={
          <Switch
            checked={props.showLikes}
            onChange={props.handleChange("showLikes")}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={`Show Likes${props.showLikes ? "!" : "?"}`}
      />

      <FormControl
        style={{
          visibility: displayLikes,
          width: "250px",
          paddingLeft:'10px'
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={props.likes}
          type="number"
          onChange={props.handleChange("likes")}
          endAdornment={
            <InputAdornment position="end">
              Like{Math.abs(props.likes) === 1 ? "" : "s"}
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
}
