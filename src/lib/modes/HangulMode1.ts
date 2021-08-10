import GameMode from './GameModeInterface';
import characters from '../../../assets/hangul-characters.json';
import Character from './HangulCharacterInterface';

class HangulMode1 implements GameMode {
  list: Array<Character>;

  currentIndex: number;

  currentCharacter: Character;

  constructor() {
    this.list = JSON.parse(JSON.stringify(characters));
    this.currentIndex = 0;
    this.currentCharacter = this.list[this.currentIndex];
  }

  restartGame() {
    this.list = JSON.parse(JSON.stringify(characters));
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

export default HangulMode1;
