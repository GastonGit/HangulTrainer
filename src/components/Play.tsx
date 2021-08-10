import React from 'react';
import { Fade } from '@material-ui/core';
import PlayGame from '../lib/PlayGame';

import redX from '../../assets/RedX.png';

const playGame = new PlayGame();

interface PlayState {
  currentHangul: string;
  value: string;
  currentQuestionCount: number;
  fullQuestionCount: number;
  incorrectAnswer: boolean;
}

class Play extends React.Component<unknown, PlayState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      currentHangul: '',
      value: '',
      currentQuestionCount: 0,
      fullQuestionCount: 0,
      incorrectAnswer: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  componentDidMount() {
    this.restartGame();
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
    if (playGame.checkAnswer(value)) {
      if (playGame.matchComplete()) {
        this.restartGame();
      } else {
        this.setState({
          currentHangul: playGame.getCurrentHangul(),
          value: '',
          currentQuestionCount: playGame.getCurrentQuestionCount(),
          fullQuestionCount: playGame.getFullQuestionCount(),
          incorrectAnswer: false,
        });
      }
    } else {
      this.setState({
        incorrectAnswer: true,
      });

      setTimeout(() => {
        this.setState({ incorrectAnswer: false });
      }, 1500);
    }

    event.preventDefault();
  }

  restartGame() {
    playGame.restartGame();
    this.setState({
      currentHangul: playGame.getCurrentHangul(),
      value: '',
      currentQuestionCount: playGame.getCurrentQuestionCount(),
      fullQuestionCount: playGame.getFullQuestionCount(),
      incorrectAnswer: false,
    });
  }

  render() {
    const {
      currentHangul,
      value,
      currentQuestionCount,
      fullQuestionCount,
      incorrectAnswer,
    } = this.state;

    return (
      <div className="PlayContainer">
        <div className="PlayRestartButtonContainer">
          <button type="button" onClick={this.restartGame}>
            Restart
          </button>
        </div>
        <div className="PlayTitleContainer">
          <p>
            Question {currentQuestionCount} / {fullQuestionCount}
          </p>
        </div>
        <div className="PlayFeedbackContainer">
          <Fade in={incorrectAnswer}>
            <img src={redX} alt="Incorrect answer" />
          </Fade>
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
