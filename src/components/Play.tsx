import React from 'react';
import { Link } from 'react-router-dom';
import PlayGame from '../lib/PlayGame';

const playGame = new PlayGame();

interface PlayState {
  currentHangul: string;
  value: string;
}

class Play extends React.Component<unknown, PlayState> {
  constructor(props: unknown) {
    super(props);
    this.state = { currentHangul: '', value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ currentHangul: playGame.getCurrentHangul() });
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    const { value } = this.state;
    playGame.checkAnswer(value);
    this.setState({ currentHangul: playGame.getCurrentHangul(), value: '' });
    event.preventDefault();
  }

  render() {
    const { currentHangul, value } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="answer">
            {currentHangul}
            <input
              type="text"
              id="answer"
              value={value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="Menu-Button">
          <Link to="/">
            <button type="button">Menu</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Play;
