import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {defaultHashtags} from '../../placeholderDefaults'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const randomPlaceHolderHashtag = defaultHashtags[Math.floor(Math.random()*defaultHashtags.length)]

export default function HashTagInputField(props) {
  const classes = useStyles();
  

  const formatAndSetState = event =>{
    const text = event.target.value
        .split(' ')
        .map(word=>{
            if (!word){
                return word
            }
          if (!word.startsWith('#')){
              return '#' + word
          }
          return word
        })
        .join(' ')
        return props.handleChange('hashTags')({target:{value:text}})
  }



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="hashtagInput"
          label="Hashtags"
          rows={4}
          placeholder={randomPlaceHolderHashtag}
          value={props.hashTags}
          onChange={formatAndSetState}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}