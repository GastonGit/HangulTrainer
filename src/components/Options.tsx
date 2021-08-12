import React from 'react';
import {
  withStyles,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core/';
import styles from '../styles/styleOptions';

interface IOptionsProps {
  classes: {
    label: string;
    list: string;
    item: string;
  };
}

class Options extends React.Component<IOptionsProps> {
  constructor(props: IOptionsProps) {
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
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <div className={classes.item}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>
              Hangul Play modes
            </FormLabel>
            <RadioGroup
              aria-label="hangul"
              name="hangulPlayMode"
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="mode1"
                control={<Radio />}
                label="Mode 1"
                labelPlacement="end"
              />
              <FormControlLabel
                value="mode2"
                control={<Radio />}
                label="Mode 2"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Options);
