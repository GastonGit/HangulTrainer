import characters from '../../../assets/hangul-characters.json';
import HangulModes from './HangulModes';

class HangulMode2 extends HangulModes {
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
    super(finalList);
  }
}

export default HangulMode2;
