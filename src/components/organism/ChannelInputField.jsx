import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function ChannelInputField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="channelInput"
        label="Channel"
        placeholder={'randomLocationPlaceholder'}
        onChange={props.handleChange('channel')}
        value={props.channel}
        InputLabelProps={{
        shrink: true,
        }}
        style={{
          minWidth:'275px'
        }}
        variant="outlined" />
    </form>
  );
}