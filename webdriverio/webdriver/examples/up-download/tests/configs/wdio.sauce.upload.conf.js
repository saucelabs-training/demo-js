const { config } = require('./wdio.shared.sauce.conf');
const build = `Upload File: Sauce Labs Desktop build-${new Date().getTime()}`;

// ============
// Specs
// ============
config.specs = ['./tests/specs/sauce.upload.spec.js'];

// ============
// Capabilities
// ============
config.capabilities = [
  // =======
  // Windows
  // =======
  {
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=windows_download.bat',
    },
  },
  {
    browserName: 'MicrosoftEdge',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=windows_download.bat',
    },
  },
  {
    browserName: 'firefox',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=windows_download.bat',
    },
  },
  {
    browserName: 'internet explorer',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=windows_download.bat',
    },
  },
  // ===
  // Mac
  // ===
  {
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=mac_download.sh',
    },
  },
  {
    browserName: 'safari',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=mac_download.sh',
    },
  },
  {
    browserName: 'firefox',
    browserVersion: 'latest',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
      // This refers to the pre-run executable that will first
      // upload the file to the Sauce Labs VM
      prerun: 'storage:filename=mac_download.sh',
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
  // The name of the subfolder, check the scripts in `./scripts/[mac|windows]_download.[sh|bat]`
  // for the folder that is used there
  const subFolder = 'Desktop';

  /**
   * These are the locations that are used on Sauce Labs to store the
   * uploaded file on the VM
   */
  const uploadFolders = {
    mac: `/Users/chef/${subFolder}/`,
    windows: `C:\\Users\\sauce\\${subFolder}\\`,
  };

  // Check the platform name
  const isWindows = capabilities.platformName.toLowerCase().includes('windows');

  // Set the global upload folder variable
  browser.uploadFolder = uploadFolders[isWindows ? 'windows' : 'mac'];
};

exports.config = config;
