import React from 'react';
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core/';

class Options extends React.Component<unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange(event: { target: { value: string } }) {
    switch (event.target.value) {
      case 'mode1':
      default:
        localStorage.setItem('currentMode', 'mode1');
        break;
      case 'mode2':
        localStorage.setItem('currentMode', 'mode2');
        break;
    }
  }

  render() {
    return (
      <div className="OptionList">
        <div className="OptionItem">
          <FormControl component="fieldset">
            <FormLabel component="legend">Hangul Play modes</FormLabel>
            <RadioGroup
              aria-label="hangul"
              name="hangulPlayMode"
              className="Option-PlayMode"
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="mode1"
                control={<Radio />}
                label="Mode 1"
                labelPlacement="start"
              />
              <FormControlLabel
                value="mode2"
                control={<Radio />}
                label="Mode 2"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Options;
