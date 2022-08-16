const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer(`http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`)
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("http://www.duckduckgo.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("SauceLabs", webdriver.Key.ENTER); // this submits on desktop browsers
  try {
    await driver.wait(webdriver.until.titleMatches(/SauceLabs/i), 5000);
  } catch (e) {
    await inputField.submit(); // this helps in mobile browsers
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/SauceLabs/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'sauce:job-result=passed'
    );
  } catch (e) {
    await driver.executeScript(
      'sauce:job-result=failed'
    );
  }
  await driver.quit();
}
const capabilities1 = {
  browserName: 'safari',
  browserVersion: '15',
  platformName: 'macOS 12',
  'sauce:options': {
    build: "sauce-js",
    name: "sauce on macOS",
  }
    }

runTestWithCaps(capabilities1);