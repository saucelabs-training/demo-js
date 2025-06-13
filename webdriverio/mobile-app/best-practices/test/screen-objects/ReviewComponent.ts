import { locatorStrategy } from '../helpers/utils';

class ReviewComponent {
  private reviewStar(number: number) {
    return $(locatorStrategy(`review star ${number}`));
  }

  private get reviewModalButton() {
    return $(locatorStrategy('Close Modal button'));
  }

  async submitReview(number: number) {
    await this.reviewStar(number).click();
  }

  async waitForReviewModalIsShown(isShown = true) {
    try {
      const result = await this.reviewModalButton.waitForDisplayed({
        reverse: !isShown,
      });
      return result;
    } catch (ign) {
      console.log('ign = ', ign);
      return !isShown;
    }
  }

  async reviewModalIsShown() {
    return this.reviewModalButton.isDisplayed();
  }

  async closeReviewModal() {
    return this.reviewModalButton.click();
  }
}

export default new ReviewComponent();
