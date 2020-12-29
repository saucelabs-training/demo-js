/**
 * Basics are used form https://github.com/klamping/wdio-downloads
 * Credits to Kevin Lamping
 */

const { pathExistsSync, readFileSync } = require('fs-extra');
const { join } = require('path');
const { URL } = require('url');

describe('Downloads', () => {
  it('should download and verify the file', () => {
    // Get the base url
    const baseURL = browser.config.baseUrl;

    // Go to the correct page for testing the download functionality
    browser.url('./download');

    // Store the element reference for repeated use
    const downloadLink = $('*=some-file.txt');

    // Click the link to initiate the download.
    // Because the options / profiles have been set correctly no dialog is shown
    downloadLink.click();

    // Get the value of the 'href' attibute on the download link
    let downloadHref = downloadLink.getAttribute('href');

    if (!downloadHref.includes(baseURL)) {
      downloadHref = new URL(downloadHref, baseURL);
    }

    // Pass through Node's `URL` class
    // @see https://nodejs.org/dist/latest-v8.x/docs/api/url.html
    const downloadUrl = new URL(downloadHref);

    // Get the 'pathname' off the url
    // e.g. 'download/some-file.txt'
    const fullPath = downloadUrl.pathname;

    // Split in to an array to only get the filename
    // e.g. ['download', 'some-file.txt']
    const splitPath = fullPath.split('/');

    // Get just the filename at the end of the array
    // e.g.  'some-file.txt'
    const fileName = splitPath.splice(-1).pop();

    // Determine the browser name that is currently running,
    // this is needed to determine the download folder
    const browserName = browser.capabilities.browserName.toLowerCase();

    // Join the filename to the path where the downloads are stored
    // based on the browser that is used
    const filePath = join(global.downloadDir[ browserName ], fileName);

    // Wait for the file to be fully downloaded
    browser.waitUntil(() => pathExistsSync(filePath), 10000);

    // The file has been downloaded,
    // now for example check the content to verify if the download really succeeded
    expect(readFileSync(filePath, 'utf-8')).toContain('asdf');
  });
});
