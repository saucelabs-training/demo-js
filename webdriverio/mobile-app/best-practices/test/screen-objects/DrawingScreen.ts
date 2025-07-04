import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class DrawingScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('drawing screen'));
  }
}

export default new DrawingScreen();
