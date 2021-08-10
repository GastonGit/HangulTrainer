import Character from './HangulCharacterInterface';

interface GameMode {
  list: Array<Character>;
  currentIndex: number;
  currentCharacter: Character;
  restartGame(): void;
  getCurrentQuestionCount(): number;
  getFullQuestionCount(): number;
  getCurrentHangul(): string;
  checkAnswer(input: string): boolean;
}

export default GameMode;
