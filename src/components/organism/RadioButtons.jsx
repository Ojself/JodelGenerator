import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { defaultColors } from "../../placeholderDefaults";

const LightOrangeRadio = withStyles({
  root: {
    color: defaultColors.lightOrange,
    '&$checked': {
      color: defaultColors.lightOrange,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const SelectiveYellowRadio = withStyles({
  root: {
    color: defaultColors.selectiveYellow,
    '&$checked': {
      color: defaultColors.selectiveYellow,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const LightRedRadio = withStyles({
  root: {
    color: defaultColors.lightRed,
    '&$checked': {
      color: defaultColors.lightRed,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const BlueGreenRadio = withStyles({
  root: {
    color: defaultColors.blueGreen,
    '&$checked': {
      color: defaultColors.blueGreen,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const PacificBlueRadio = withStyles({
  root: {
    color: defaultColors.pacificBlue,
    '&$checked': {
      color: defaultColors.pacificBlue,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const LightGreenRadio = withStyles({
  root: {
    color: defaultColors.lightGreen,
    '&$checked': {
      color: defaultColors.lightGreen,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);



export default function RadioButtons(props) {

  return (
    <div>
      <LightOrangeRadio
        checked={props.backgroundColor === 'lightOrange'}
        onChange={props.handleChange('backgroundColor')}
        value="lightOrange"
        size="medium"
      />
      <SelectiveYellowRadio
        checked={props.backgroundColor === 'selectiveYellow'}
        onChange={props.handleChange('backgroundColor')}
        value="selectiveYellow"
        size="medium"
      />
      <LightRedRadio
        checked={props.backgroundColor === 'lightRed'}
        onChange={props.handleChange('backgroundColor')}
        value="lightRed"
        size="medium"
      />
      <BlueGreenRadio
        checked={props.backgroundColor === 'blueGreen'}
        onChange={props.handleChange('backgroundColor')}
        value="blueGreen"
        size="medium"
      />
      <PacificBlueRadio
        checked={props.backgroundColor === 'pacificBlue'}
        onChange={props.handleChange('backgroundColor')}
        value="pacificBlue"
        size="medium"
      />
      <LightGreenRadio
        checked={props.backgroundColor === 'lightGreen'}
        onChange={props.handleChange('backgroundColor')}
        value="lightGreen"
        size="medium"
      />
    </div>
  );
}
