import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class CatalogScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('products screen'));
  }
}

export default new CatalogScreen();
