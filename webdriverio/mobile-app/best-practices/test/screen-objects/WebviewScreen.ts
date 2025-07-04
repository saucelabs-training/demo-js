import AppScreen from './AppScreen';
import { locatorStrategy } from '../helpers/utils';

class WebviewScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('webview selection screen'));
  }
}

export default new WebviewScreen();
