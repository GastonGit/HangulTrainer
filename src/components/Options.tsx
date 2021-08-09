import React from 'react';

class Options extends React.Component<unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange() {}

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
                value="value"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="mode2" className="">
              Mode 2
              <input
                type="radio"
                id="mode2"
                name="playmode"
                value="value"
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
