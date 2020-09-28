import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonViewGroup(props) {
  const classes = useStyles();

 const handleClick = (view)=>{
     props.handleChange('view')({target:{value:view}})
 }


  return (
    <div className={classes.root}>
      <ButtonGroup  variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={()=>handleClick("clean")}>Clean</Button>
        <Button onClick={()=>handleClick("detailed")}>Detailed</Button>
      </ButtonGroup>
    </div>
  );
}