import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import RoomIcon from '@material-ui/icons/Room';
import HomeIcon from '@material-ui/icons/Home';



export default function HousePinRadio(props) {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="locationIcon" name="locationIcon1" value={props.housePinIcon} onChange={props.handleChange('housePinIcon')}>
        <FormControlLabel value="house" control={<Radio color="primary" />} label={<HomeIcon color="action"/>} />
        <FormControlLabel value="pin" control={<Radio color="primary" />} label={<RoomIcon color="action"/>} />
      </RadioGroup>
    </FormControl>
  );

}