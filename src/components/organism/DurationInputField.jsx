import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const alphabet = String.fromCharCode(
  ...[...Array(26)].map((_, i) => i + 97)
).split("");
const defaultDurationLabel = ["s", "sec", "min", "m", "h", "day", "days"];

export default function DurationInputField(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="durationInput"
            label="Time passed"
            type="number"
            onChange={props.handleChange("duration")}
            value={props.duration}
            style={{
              width: "120px",
            }}
            InputProps={{
              inputProps: {
                max: 60,
                min: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
      </form>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select"></InputLabel>
        <Select
          onChange={props.handleChange("durationLabel")}
          native
          id="grouped-native-select"
        >
          <optgroup label="Defaults">
            {defaultDurationLabel.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </optgroup>
          <optgroup label="All">
            {alphabet.map((char, i) => (
              <option key={`${i}${char}`} value={char}>
                {char}
              </option>
            ))}
            {alphabet.map((char, i) => (
              <option key={`${char}${i}`} value={char.toUpperCase()}>
                {char.toUpperCase()}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
