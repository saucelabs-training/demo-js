//
// ==================================================================
// We are using accessibilityId's here so easily select elements for
// Android and iOS in a cross-platform way
// This project is not using a PageObject model because it's not part
// if the scope of this exercise
// ==================================================================
//

describe('Appium Gestures Exercises', () => {
  // This will be executed for every test, log in and verify that the
  // correct screen is loaded
  beforeEach(() => {
    // Wait for the App to be opened
    $('~test-Login').waitForDisplayed();

    // Login in and wait for the items screen is visible
    $('~test-Username').addValue('standard_user');
    $('~test-Password').addValue('secret_sauce');
    $('~test-LOGIN').click();
    $('~test-PRODUCTS').waitForDisplayed();
  });

  // This will be executed after each test
  afterEach(() => {
    // Restart the app after each test
    driver.reset();
  });

  it('should be able to do a scroll with TouchPerform', () => {
    // 1. Get the screen / element size (element size is explained in the touch actions)

    /**
     * CODE THIS STEP
     */
    // 2. Determine the x/y from/to position
    const from = {
      // Get the center of the horizontal axis
      x: '{DETERMINE-VALUE}',
      // Always start a few pixels above the bottom of the screen
      // otherwise you might open a system menu
      y: '{DETERMINE-VALUE}',
    };
    const to = {
      // Get the center of the horizontal axis
      x: '{DETERMINE-VALUE}',
      // Stop at the top of the screen, or maybe a little bit below
      // the top
      y: '{DETERMINE-VALUE}',
    };

    /**
     * CODE THIS STEP
     */
    // 3. Execute the touch perform
    // 3a. The press which is the start position of your finger
    // 3b. The wait for the speed of the move to
    // 3c. The move which will be the end position of your finger
    // 3d. Now release it


    // For demo purpose
    driver.pause(5000);
  });

  it('should be able to do a swipe with TouchActions', () => {
    // Prepare test by adding the first product to the cart and go to the cart
    $$('~test-ADD TO CART')[0].click();
    // Open the cart
    $('~test-Cart').click();
    $('~test-Cart Content').waitForDisplayed();

    /**
     * CODE THIS STEP
     */
    // 1. Get the size of the element
    const firstItem = $$('~test-Item')[0];

    /**
     * CODE THIS STEP
     */
    // 2. Determine X and Y position
    //    We move our finger on the horizontal axis, this means we need to
    //    have a starting X position and the Y position will stay the same.
    //    We need to determine the startX and centerY position
    const startX = '{DETERMINE-VALUE}';
    const centerY = '{DETERMINE-VALUE}';

    /**
     * CODE THIS STEP
     */
    // 3. Execute the touch action
    //    We swipe over the horizontal axis which means the Y position
    //    will always stay the same, but you can change it to create
    //    different gestures for swiping
    //    See https://github.com/jlipps/simple-wd-spec#perform-actions
    //    for a clear explanation of all properties
    // 3a. Create the event
    // 3b. Move finger into start position
    // 3c. Finger comes down into contact with screen
    // 3d. Pause for a little bit
    // 3e. Finger moves to end position
    //     We move our finger from the center of the element to the
    //     starting position of the element
    // 3f. Finger lets up, off the screen


    // For demo purpose
    driver.pause(5000);
  });

  it('should be able to scroll the easy way', () => {
    // 2. Android and iOS have their own implementation of executing a "simple"
    //    scroll, so we ask the driver here if we are an Android or iOS device
    //    Be aware that you need to have Appium 1.19.0 on your machine!
    if (driver.isAndroid) {
      // 2a. See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-scrollGesture
      //     for more information
      /**
       * CODE THIS STEP
       */
    } else {
      // 2b. See http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures/index.html#mobile-scroll
      //     for more information
      /**
       * CODE THIS STEP
       */
    }

    // For demo purpose
    driver.pause(5000);
  });

  it('should be able to swipe the easy way', () => {
    // Prepare test by adding the first product to the cart and go to the cart
    $$('~test-ADD TO CART')[0].click();
    // Open the cart
    $('~test-Cart').click();
    $('~test-Cart Content').waitForDisplayed();

    // 1. Get the swag item we want to swipe
    const firstItemId = $$('~test-Item')[0].elementId;

    // 2. Android and iOS have their own implementation of executing a "simple"
    //    swipe, so we ask the driver here if we are an Android or iOS device
    //    Be aware that you need to have Appium 1.19.0 on your machine!
    if (driver.isAndroid) {
      // 2a. See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-swipegesture
      //     for more information
      /**
       * CODE THIS STEP
       */
    } else {
      // 2b. See http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures/#mobile-swipe
      //     for more information
      /**
       * CODE THIS STEP
       */
    }

    // For demo purpose
    driver.pause(5000);
  });
});
