describe('Login Accessibility Spec', () => {
    it('should accessibility scan the login page', async () => {
        //Navigate to the page that you'd like to scan
        await browser.url('');
        //Scans the page for accessibility and pushes results to sauce labs
        await browser.getAxeResults();
    });
});