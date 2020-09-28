import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {defaultQuotes} from '../../placeholderDefaults'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function TextInputField(props) {
  const classes = useStyles();

const removeDefaultValue = (event) => {
  if (defaultQuotes.some(quote=> quote === event.target.value)){
    props.handleChange('textInput')({target:{value:''}})
  }
}

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style={{
          minWidth:'275px'
        }}
          id="textInput"
          label="Text"
          multiline
          rows={4}
          onFocus={removeDefaultValue}
          value={props.textInput}
          onChange={props.handleChange('textInput')}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}