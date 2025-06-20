const { byType, byValueKey } = require('appium-flutter-finder');

describe('appium-flutter-driver', () => {
  it('load and validate the app', async () => {
    expect(await driver.execute('flutter:checkHealth')).toEqual('ok');

    // Store the elements
    const counterTextFinder = byValueKey('counter');
    const buttonFinder = byType('Icon');

    // Clear the app
    await driver.execute('flutter:clearTimeline');
    await driver.execute('flutter:forceGC');

    // Take a native screenshot
    await driver.switchContext('NATIVE_APP');
    await driver.saveScreenshot(
      `./${driver.isIOS ? 'ios' : 'android'}-native-screenshot.png`
    );
    // Take a screenshot with Flutter
    await driver.switchContext('FLUTTER');
    await driver.saveScreenshot(
      `./${driver.isIOS ? 'ios' : 'android'}-flutter-screenshot.png`
    );

    // Check that the counter starts at 0.
    expect(await driver.getElementText(counterTextFinder)).toEqual('0');

    // Now click 10 times on the button.
    for (let i = 0; i < 10; i++) {
      await driver.elementClick(buttonFinder);
    }

    // Check that the counter is now 10.
    expect(await driver.getElementText(counterTextFinder)).toEqual('10');
  });
});
