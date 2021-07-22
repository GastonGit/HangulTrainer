import React from 'react';
import PlayGame from '../lib/PlayGame';

const playGame = new PlayGame();

interface PlayState {
  currentHangul: string;
  value: string;
  currentQuestionCount: number;
  fullQuestionCount: number;
}

class Play extends React.Component<unknown, PlayState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      currentHangul: '',
      value: '',
      currentQuestionCount: 0,
      fullQuestionCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentHangul: playGame.getCurrentHangul(),
      currentQuestionCount: playGame.getCurrentQuestionCount(),
      fullQuestionCount: playGame.getFullQuestionCount(),
    });
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    const { value } = this.state;
    playGame.checkAnswer(value);
    this.setState({
      currentHangul: playGame.getCurrentHangul(),
      value: '',
      currentQuestionCount: playGame.getCurrentQuestionCount(),
      fullQuestionCount: playGame.getFullQuestionCount(),
    });
    event.preventDefault();
  }

  render() {
    const {
      currentHangul,
      value,
      currentQuestionCount,
      fullQuestionCount,
    } = this.state;

    return (
      <div>
        <div className="PlayTitleContainer">
          <p>
            Question {currentQuestionCount} / {fullQuestionCount}
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="PlayContent">
          <label htmlFor="answer" className="LabelContent">
            <p className="CurrentHangul">{currentHangul}</p>
            <input
              type="text"
              id="answer"
              value={value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" className="PlaySubmitButton" />
        </form>
      </div>
    );
  }
}

export default Play;
