import GameMode from './modes/GameModeInterface';
import HangulMode1 from './modes/HangulMode1';

class PlayGame {
  private currentMode: GameMode;

  constructor() {
    this.currentMode = new HangulMode1();
  }

  restartGame() {
    this.currentMode.restartGame();
  }

  getCurrentQuestionCount() {
    return this.currentMode.getCurrentQuestionCount();
  }

  getFullQuestionCount() {
    return this.currentMode.getFullQuestionCount();
  }

  getCurrentHangul() {
    return this.currentMode.getCurrentHangul();
  }

  checkAnswer(input: string) {
    return this.currentMode.checkAnswer(input);
  }
}

export default PlayGame;
