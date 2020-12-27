const { join } = require('path');

describe('Sauce Chrome Upload', () => {
  it('should be able to upload a file', () => {
    // The name of the file that needs to be uploaded
    const fileName = 'some-file.txt';

    // 1a.  Load the browser
    browser.url('/upload');
    // 1b.  Set the browser to a smaller screen just for watching
    browser.setWindowSize(640, 480);

    // Set the file path
    const filePath = join(process.cwd(), `assets/${fileName}`);
    // For Chrome on Sauce you can't use a location on a local machine / local CI machine because the VM doesn't have access to it, even
    // though you are using Sauce Connect. For this scenario the Selenium project created a `file` that is currently only supported when
    // running Chrome or using a Selenium Grid with the Selenium standalone server. The command expects the file payload to be passed
    // in as base64 string, so that's what we will be doing here.
    // See also https://webdriver.io/blog/2019/06/25/file-upload.html
    const remoteFilePath = browser.uploadFile(filePath);

    // 2a.  Upload the file
    $('#file-upload').setValue(remoteFilePath);
    // 2b.  Submit the file upload
    $('#file-submit').click();

    // 3a.  Wait for the text to be visible, we are now validating it with the uploaded file container to be visible
    $('#uploaded-files').waitForDisplayed(15000);
    // 3b.  Do the verification
    expect($('#uploaded-files').getText()).toContain(fileName);
  });
});
