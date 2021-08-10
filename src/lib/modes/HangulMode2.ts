import GameMode from './GameModeInterface';
import characters from '../../../assets/hangul-characters.json';
import Character from './HangulCharacterInterface';

class HangulMode2 implements GameMode {
  list: Array<Character>;

  resetList: Array<Character>;

  currentIndex: number;

  currentCharacter: Character;

  constructor() {
    const tempList = JSON.parse(JSON.stringify(characters));
    const finalList = [];
    const charCount = 3;

    for (let i = tempList.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempList[i], tempList[j]] = [tempList[j], tempList[i]];
    }

    for (let i = 0; i < charCount; i += 1) {
      finalList.push(tempList.pop());
    }

    this.resetList = JSON.parse(JSON.stringify(finalList));
    this.list = finalList;
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

export default HangulMode2;
