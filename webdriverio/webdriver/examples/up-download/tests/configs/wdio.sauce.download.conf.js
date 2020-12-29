const {config} = require('./wdio.shared.sauce.conf');
const build = `Download File: Sauce Labs Desktop build-${new Date().getTime()}`;

// ============
// Specs
// ============
config.specs = [
  './tests/specs/sauce.download.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
  // =======
  // Windows
  // =======
  {
    browserName: 'chrome',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
    },
  },
  {
    browserName: 'firefox',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
    },
  },
  // ===
  // Mac
  // ===
  {
    browserName: 'chrome',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
    },
  },
  {
    browserName: 'safari',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
    },
  },
  {
    browserName: 'firefox',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
    },
  },
];

// =====
// Hooks
// =====
/**
 * The `before`-hook is used to determine the platformName location on the current running VM
 */
config.before = (capabilities) => {
  const subFolder = 'Downloads';

  /**
   * These are the locations that are used on Sauce Labs to store the
   * downloaded file on the VM
   */
  const downloadFolders = {
    mac: `/Users/chef/${subFolder}/`,
    windowsSauce: `C:\\Users\\sauce\\${subFolder}\\`,
    windowsAdmin: `C:\\Users\\Administrator\\${subFolder}\\`,
  };

  // Check the platformName name to to determine the download folder
  const isChrome = capabilities.browserName.toLowerCase().includes('chrome');
  const isWindows = capabilities.platformName.toLowerCase().includes('windows');

  // Add the download folder to the browser object to easily access it during tests
  browser.downloadFolder = downloadFolders[isChrome && isWindows ? 'windowsAdmin' : isWindows ? 'windowsSauce' : 'mac'];
};

exports.config = config;
