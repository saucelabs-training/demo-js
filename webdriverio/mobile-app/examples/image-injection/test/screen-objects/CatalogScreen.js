import Base from './Base';
import { locatorStrategy } from '../helpers/utils';

class CatalogScreen extends Base {
  constructor() {
    super(locatorStrategy('products screen'));
  }
}

export default new CatalogScreen();
