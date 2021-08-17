import GameMode from './GameModeInterface';
import Character from './HangulCharacterInterface';

class HangulModes implements GameMode {
  list: Array<Character>;

  resetList: Array<Character>;

  currentIndex: number;

  currentCharacter: Character;

  constructor(list: Array<Character>) {
    this.list = list;
    this.resetList = JSON.parse(JSON.stringify(this.list));
    this.currentIndex = 0;
    this.currentCharacter = this.list[this.currentIndex];
  }

  restartGame() {
    this.list = JSON.parse(JSON.stringify(this.resetList));
    this.currentIndex = 0;
    this.currentCharacter = this.list[this.currentIndex];
  }

  getCurrentQuestionCount() {
    return this.currentIndex + 1;
  }

  getFullQuestionCount() {
    return this.list.length;
  }

  getCurrentHangul() {
    return this.currentCharacter.hangul;
  }

  matchComplete() {
    return !(this.currentIndex < this.list.length);
  }

  checkAnswer(input: string) {
    if (input === this.currentCharacter.romanization) {
      this.currentIndex += 1;
      this.currentCharacter = this.list[this.currentIndex];

      return true;
    }
    return false;
  }
}

export default HangulModes;
