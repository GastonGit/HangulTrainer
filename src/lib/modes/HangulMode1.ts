import HangulModes from './HangulModes';
import characters from '../../../assets/hangul-characters.json';

class HangulMode1 extends HangulModes {
  constructor() {
    const list = JSON.parse(JSON.stringify(characters));
    super(list);
  }
}

export default HangulMode1;
