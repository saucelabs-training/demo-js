const swipe = async (
  from: {x: number; y: number},
  to: {x: number; y: number},
) => {
  await driver.performActions([
    {
      // a. Create the event
      type: 'pointer',
      id: 'finger1',
      parameters: {pointerType: 'touch'},
      actions: [
        // b. Move finger into start position
        {type: 'pointerMove', duration: 0, x: from.x, y: from.y},
        // c. Finger comes down into contact with screen
        {type: 'pointerDown', button: 0},
        // d. Pause for a little bit
        {type: 'pause', duration: 100},
        // e. Finger moves to end position
        //    We move our finger from the center of the element to the
        //    starting position of the element
        {type: 'pointerMove', duration: 1000, x: to.x, y: to.y},
        // f. Finger lets up, off the screen
        {type: 'pointerUp', button: 0},
      ],
    },
  ]);
  await driver.pause(2000);
};
const findElementBySwipe = async ({
  element,
  maxScrolls = 5,
  scrollableElement,
  scrollUp = false,
}: {
  element: WebdriverIO.Element;
  maxScrolls?: number;
  scrollableElement: WebdriverIO.Element;
  scrollUp?: boolean;
}): Promise<WebdriverIO.Element | undefined> => {
  for (let i = 0; i < maxScrolls; i++) {
    if (await element.isDisplayed()) {
      return element;
    }

    const {x, y, height, width} = await driver.getElementRect(
      scrollableElement.elementId,
    );
    const centerX = x + width / 2;
    const yStart = y + height * 0.9;
    const yEnd = y + height * 0.1;
    // Swipe
    if (scrollUp) {
      // It's the reverse
      await swipe({x: centerX, y: yEnd}, {x: centerX, y: yStart});
    } else {
      await swipe({x: centerX, y: yStart}, {x: centerX, y: yEnd});
    }
  }
};

export {findElementBySwipe, swipe};
