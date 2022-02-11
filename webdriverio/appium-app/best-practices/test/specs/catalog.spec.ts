import CatalogScreen from '../screen-objects/CatalogScreen';
import { restartApp } from '../helpers/utils';
import ItemDetailsScreen from '../screen-objects/ItemDetailsScreen';
import ReviewComponent from '../screen-objects/ReviewComponent';
import SortModal from '../screen-objects/SortModal';

describe('Catalog', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should be able to load the initial catalog screen', async () => {
    await expect(await CatalogScreen.itemsAmount()).toBeGreaterThan(0);
  });

  it('should be able submit a review', async () => {
    await ReviewComponent.submitReview(1);
    await ReviewComponent.waitForReviewModalIsShown();
    await ReviewComponent.closeReviewModal();
    await ReviewComponent.waitForReviewModalIsShown(false);

    await expect(await ReviewComponent.reviewModalIsShown()).toBeFalsy();
  });

  it('should be able to sort the items', async () => {
    await expect(await CatalogScreen.getFirstItemText()).toContain('Backpack');
    await CatalogScreen.openSortModal();
    // Check current active option Name - Ascending and change to Name - Descending
    await expect(await SortModal.getActiveOption()).toContain(
      'Name - Ascending'
    );

    // Now sort and verify
    await SortModal.sortNameDesc();
    await expect(await CatalogScreen.getFirstItemText()).toContain(
      'Test.allTheThings()'
    );

    // Check Name Descending and change to Price Ascending
    await CatalogScreen.openSortModal();
    // Check current active option
    await expect(await SortModal.getActiveOption()).toContain(
      'Name - Descending'
    );

    // Now sort and verify
    await SortModal.sortPriceAsc();
    await expect(await CatalogScreen.getFirstItemText()).toContain('Onesie');

    // Check Price Ascending and change to Price Descending
    await CatalogScreen.openSortModal();
    // Check current active option
    await expect(await SortModal.getActiveOption()).toContain(
      'Price - Ascending'
    );

    // Now sort and verify
    await SortModal.sortPriceDesc();
    await expect(await CatalogScreen.getFirstItemText()).toContain(
      'Fleece Jacket'
    );

    // Check Price Descending and change to Name Ascending
    await CatalogScreen.openSortModal();
    // Check current active option
    await expect(await SortModal.getActiveOption()).toContain(
      'Price - Descending'
    );

    // Now sort and verify
    await SortModal.sortNameAsc();
    await expect(await CatalogScreen.getFirstItemText()).toContain('Backpack');

    // Check and change
    await CatalogScreen.openSortModal();
    // Check current active option
    await expect(await SortModal.getActiveOption()).toContain(
      'Name - Ascending'
    );
  });

  /**
   * Walk over each product to verify if it can be opened
   */
  const items = [
    'Backpack',
    'Bike Light',
    'Bolt T-Shirt',
    'Fleece Jacket',
    'Onesie',
    'Test.allTheThings()',
  ];

  for (let item of items) {
    it(`should be able to open the ${item}`, async () => {
      await CatalogScreen.openSwagItem(item);
      await ItemDetailsScreen.waitForIsShown();

      await expect(await ItemDetailsScreen.productName()).toContain(item);
    });
  }
});
