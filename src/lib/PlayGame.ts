import characters from '../../assets/hangul-characters.json';

interface Character {
  id: number;
  hangul: string;
  romanization: string;
  pronunciation: string;
}

class PlayGame {
  private readonly list: Array<Character>;

  private currentIndex: number;

  private currentCharacter: Character;

  constructor() {
    this.list = JSON.parse(JSON.stringify(characters));
    this.currentIndex = 0;
    this.currentCharacter = this.list[this.currentIndex];
  }

  getCurrentHangul() {
    return this.currentCharacter.hangul;
  }

  checkAnswer(input: string) {
    if (input === this.currentCharacter.romanization) {
      this.currentIndex += 1;
      this.currentCharacter = this.list[this.currentIndex];
    }
  }
}

export default PlayGame;
