const wd = require('webdriverio');

(async function main() {
    caps = {};
caps['browserName'] = 'chrome';
caps['platform'] = 'Windows 10';
caps['version'] = 'latest';
caps['pageLoadStrategy'] = 'eager';
caps['unhandledPromptBehavior'] = 'dismiss';
caps['maxDuration'] = 4;
caps['commandTimeout'] = 5;
caps['idleTimeout'] = 6;
caps['timeZone'] = 'Banjul';
caps['extendedDebugging'] = true;
caps['capturePerformance'] = true;
caps['public'] = 'public restricted';
caps['build'] = "<your build id>";
caps['name'] = "<your test name>";

const browser = await wd.remote({
  user: 'dangr',
  key: '4dc4ce48-eac8-4d05-b5dc-15cfd2937615',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  baseUrl: 'wd/hub',
  capabilities: caps
});
await browser.setTimeout({
  'implicit': 1,
  'script': 2,
  'pageLoad': 3,
});
})();
