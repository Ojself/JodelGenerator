import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {defaultLocations} from '../../placeholderDefaults'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const randomLocationPlaceholder = defaultLocations[Math.floor(Math.random()*defaultLocations.length)]

export default function LocationInputField(props) {
  const classes = useStyles();

  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="locationInput"
        label="location"
        placeholder={randomLocationPlaceholder}
        onChange={props.handleChange('location')}
        value={props.location}
        InputLabelProps={{
        shrink: true,
        }}
        variant="outlined" />
    </form>
  );
}