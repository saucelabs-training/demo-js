//
// ==================================================================
// We are using accessibilityId's here so easily select elements for
// Android and iOS in a cross-platform way
// This project is not using a PageObject model because it's not part
// if the scope of this exercise
// ==================================================================
//

describe('Appium Gestures Answers', () => {
  // This will be executed for every test, log in and verify that the
  // correct screen is loaded
  beforeEach(async () => {
    // Wait for the App to be opened
    await $('~test-Login').waitForDisplayed();

    // Login in and wait for the items screen is visible
    await $('~test-Username').addValue('standard_user');
    await $('~test-Password').addValue('secret_sauce');
    await $('~test-LOGIN').click();
    await $('~test-PRODUCTS').waitForDisplayed();
  });

  // This will be executed after each test
  afterEach(async () => {
    // Restart the app after each test
    await driver.reset();
  });

  it('should be able to do a scroll with TouchPerform', async () => {
    // 1. Get the screen / element size (element size is explained in the touch actions)
    const screenSize = await driver.getWindowRect();

    // 2. Determine the x/y from/to position
    const from = {
      // Get the center of the horizontal axis
      x: screenSize.width / 2,
      // Always start a few pixels above the bottom of the screen
      // otherwise you might open a system menu
      y: screenSize.height - 100,
    };
    const to = {
      // Get the center of the horizontal axis
      x: screenSize.width / 2,
      // Stop at the top of the screen, or maybe a little bit below
      // the top
      y: 0 + 100,
    };

    // 3. Execute the touch perform
    await driver.touchPerform([
      // 3a. The press which is the start position of your finger
      {
        action: 'press',
        options: from,
      },
      // 3b. The wait for the speed of the move to
      {
        action: 'wait',
        // Play with the timing here to make it faster or slower
        options: { ms: 1000 },
      },
      // 3c. The move which will be the end position of your finger
      {
        action: 'moveTo',
        options: to,
      },
      // 3d. Now release it
      {
        action: 'release',
      },
    ]);

    // For demo purpose
    await driver.pause(5000);
  });

  it('should be able to do a swipe with TouchActions', async () => {
    // Prepare test by adding the first product to the cart and go to the cart
    await (await $$('~test-ADD TO CART'))[0].click();
    // Open the cart
    await $('~test-Cart').click();
    await $('~test-Cart Content').waitForDisplayed();

    // 1. Get the size of the element
    const firstItem = (await $$('~test-Item'))[0];
    const { x, y, width, height } = await driver.getElementRect(
      firstItem.elementId
    );

    // 2. Determine X and Y position
    //    We move our finger on the horizontal axis, this means we need to
    //    have a starting X position and the Y position will stay the same.
    //    We need to determine the startX and centerY position
    const startX = x + width - 100;
    const centerY = y + height / 2;

    // 3. Execute the touch action
    //    We swipe over the horizontal axis which means the Y position
    //    will always stay the same, but you can change it to create
    //    different gestures for swiping
    //    See https://github.com/jlipps/simple-wd-spec#perform-actions
    //    for a clear explanation of all properties
    await driver.performActions([
      {
        // 3a. Create the event
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          // 3b. Move finger into start position
          { type: 'pointerMove', duration: 0, x: startX, y: centerY },
          // 3c. Finger comes down into contact with screen
          { type: 'pointerDown', button: 0 },
          // 3d. Pause for a little bit
          { type: 'pause', duration: 100 },
          // 3e. Finger moves to end position
          //     We move our finger from the center of the element to the
          //     starting position of the element
          { type: 'pointerMove', duration: 250, x: x, y: centerY },
          // 3f. Finger lets up, off the screen
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    // For demo purpose
    await driver.pause(5000);
  });

  it('should be able to scroll the easy way', async () => {
    // 2. Android and iOS have their own implementation of executing a "simple"
    //    scroll, so we ask the driver here if we are an Android or iOS device
    //    Be aware that you need to have Appium 1.19.0 on your machine!
    if (driver.isAndroid) {
      // 2a. See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-scrollGesture
      //     for more information
      await driver.execute('mobile:scrollGesture', {
        elementId: $('~test-PRODUCTS').elementId,
        direction: 'down',
        percent: 1.0,
      });
    } else {
      // 2b. See http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures/index.html#mobile-scroll
      //     for more information
      await driver.execute('mobile:scroll', {
        direction: 'down',
      });
    }

    // For demo purpose
    await driver.pause(5000);
  });

  it('should be able to swipe the easy way', async () => {
    // Prepare test by adding the first product to the cart and go to the cart
    await (await $$('~test-ADD TO CART'))[0].click();
    // Open the cart
    await $('~test-Cart').click();
    await $('~test-Cart Content').waitForDisplayed();

    // 1. Get the swag item we want to swipe
    const firstItemId = await (await $$('~test-Item'))[0].elementId;

    // 2. Android and iOS have their own implementation of executing a "simple"
    //    swipe, so we ask the driver here if we are an Android or iOS device
    //    Be aware that you need to have Appium 1.19.0 on your machine!
    if (driver.isAndroid) {
      // 2a. See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-swipegesture
      //     for more information
      await driver.execute('mobile:swipeGesture', {
        elementId: firstItemId,
        // Android seems to interpreted swiping left to right a bit different in
        // comparison to iOS
        direction: 'left',
        percent: 0.8,
      });
    } else {
      // 2b. See http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures/#mobile-swipe
      //     for more information
      await driver.execute('mobile:swipe', {
        direction: 'left',
        elementId: firstItemId,
      });
    }

    // For demo purpose
    await driver.pause(5000);
  });
});
