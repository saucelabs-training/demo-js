// @ts-ignore
import { browser, expect } from '@wdio/globals';
import "jest"

describe('1st AppiumFlutterIntegrationDriver test using appium latest', () => {
  it('Flutter counter demo app', async () => {
    const incrementButton = await browser
        .flutterByValueKey$('counterView_increment_floatingActionButton');

    for (let i = 0; i < 5; i++) {
      await incrementButton.click();
    }

    const decrementButton = await browser
        .flutterByValueKey$('counterView_decrement_floatingActionButton');

    for (let i = 0; i < 3; i++) {
      await decrementButton.click();
    }
    // counter_value
    const counterValue = await browser.flutterByText$("2");

    expect(await counterValue.getText()).toEqual('2');
  });
});
