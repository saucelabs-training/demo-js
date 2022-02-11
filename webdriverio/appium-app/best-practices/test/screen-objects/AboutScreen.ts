import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class AboutScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('about screen'));
  }
}

export default new AboutScreen();
