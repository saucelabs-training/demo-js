# Playwright

## Overview

Playwright uses a low-level protocol to provide access to implementation details of the application under test. It
allows setting event listeners to take specific actions when certain criteria are met (e.g., whenever the app requests
to load an image asset, tell it to display a kitten photo instead). It is primarily written in JavaScript, but provides
support for Java, Python and C# as well. The primary limitation currently is that it does not work with the production
version of browsers, which means tests must be executed against a modified copy of the latest open source version of the
desired browser. These custom browsers must be downloaded with each new version of Playwright. This is especially
limiting for browsers like Safari, which is quite distinct from the available open source Webkit code.

## Playwright on Sauce Labs

There are 4 ways to execute Playwright tests with Sauce Labs, and this project demonstrates running the same tests with
each approach. You can run these tests by cloning the repo and navigating to this directory. Ensure
you [set the environment variables](https://docs.saucelabs.com/basics/environment-variables/), and run:

```bash
npm install 
```

### Saucectl

* **Purpose**: Execute Playwright tests written in JavaScript on any Sauce Labs platform configuration.
* **Use Case**: Ideal for running cross-browser/cross-platform tests without maintaining local environments.
* **Reference**: https://docs.saucelabs.com/web-apps/automated-testing/playwright/

For more information on the saucectl product, read
the [saucectl documentation](https://docs.saucelabs.com/dev/cli/saucectl/). For a more thorough demonstration of ways to
use playwright with saucectl, take a look at the
[Saucectl Playwright Example Repo](https://github.com/saucelabs/saucectl-playwright-example).

To execute Playwright with saucectl from this directory, run:

```bash
npm run test.saucectl 
```

### Remote Grid

* **Purpose**: Execute Playwright tests in any [suppported language](https://playwright.dev/docs/languages)
  by connecting to a remote Selenium Grid.
* **Use Case**: Suitable for developers comfortable configuring custom code environments and seeking detailed command
  execution logs. This solution is limited to testing Chrome and Microsoft Edge, since it connects over the Chrome
  DevTools Protocol (`se:cdp`), which only Chromium-family browsers expose.
* **Reference**: https://playwright.dev/docs/selenium-grid

To execute Playwright with a remote grid from this directory, run:

```bash
npm run test.grid 
```

### Native Playwright WebSocket

* **Purpose**: Execute Playwright tests by connecting directly to Sauce Labs' native Playwright WebSocket endpoint.
* **Use Case**: Ideal for Playwright users who want Sauce Labs execution and scale, keeping the
  full native Playwright protocol end-to-end. 

To execute Playwright with the native WebSocket endpoint from this directory, run:

```bash
npm run test.native 
```

### Playwright Reporter

* **Purpose**: Execute Playwright tests locally and display detailed reports on Sauce Labs.
* **Use Case**: Best for executing JavaScript-based Playwright tests on local machines when cross-platform testing is
  not needed.
* **Reference**: https://docs.saucelabs.com/web-apps/automated-testing/playwright/

To execute Playwright with the playwright reporter from this directory, run:

```bash
npm run test.reporter 
```

## Region

All Sauce Labs URLs (`SAUCE_URL`, `SAUCE_NATIVE_URL`, `SAUCE_API_URL` in `tests/fixture.js`) derive from a single
`SAUCE_REGION` value, defaulting to `us-west-1`. Set the `SAUCE_REGION` environment variable (e.g. `us-east-1`,
`eu-central-1`) to point every request at a different data center without editing code.
