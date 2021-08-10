import GameMode from './modes/GameModeInterface';
import HangulMode1 from './modes/HangulMode1';
import HangulMode2 from './modes/HangulMode2';

class PlayGame {
  private currentMode: GameMode;

  constructor() {
    this.currentMode = new HangulMode1();
  }

  confirmMode() {
    switch (localStorage.getItem('currentMode')) {
      case 'mode1':
      default:
        this.currentMode = new HangulMode1();
        break;
      case 'mode2':
        this.currentMode = new HangulMode2();
        break;
    }
    this.restartGame();
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

  matchComplete() {
    return this.currentMode.matchComplete();
  }
}

export default PlayGame;
