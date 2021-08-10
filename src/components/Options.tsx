import React from 'react';

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
          <div className="OptionTitle">
            <p>Play mode</p>
          </div>
          <form className="Option-PlayMode">
            <label htmlFor="mode1" className="">
              Mode 1
              <input
                type="radio"
                id="mode1"
                name="playmode"
                value="mode1"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="mode2" className="">
              Mode 2
              <input
                type="radio"
                id="mode2"
                name="playmode"
                value="mode2"
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Options;
