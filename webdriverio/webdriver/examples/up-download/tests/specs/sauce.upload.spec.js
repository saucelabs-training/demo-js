describe('Sauce Upload', () => {
  it('should be able to upload a file', () => {
    // The name of the file that needs to be uploaded
    const fileName = 'forkme_right_green_007200.png';

    // 1a.  Load the browser
    browser.url('/upload');
    // 1b.  Set the browser to a smaller screen just for watching
    browser.setWindowRect(200, 200, 640, 480);

    // 2a.  Upload the file by adding the location to the file on the machine,
    //      The path and file CAN'T be joined with NodeJS version of `join` because
    //      the tests are executed on different platforms, otherwise only the platform
    //      that executes the test determines the way of the slashes
    //      The platformFolder folder is determined in the `before`-hook of the `wdio.sauce.upload.conf.js`
    $('#file-upload').setValue(`${ browser.uploadFolder }${ fileName }`);
    // 2b.  Submit the file upload
    $('#file-submit').click();

    // 3a.  Wait for the text to be visible, we are now validating it with the uploaded file container to be visible
    $('#uploaded-files').waitForDisplayed(15000);
    // 3b.  Do the verification
    expect($('#uploaded-files').getText()).toContain(fileName);
  });
});
