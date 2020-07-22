describe('index tests', () => {

    it('should have the right title', () => {
        browser.url('https://sand-developerportal-lloydsapi.azurewebsites.net/')
        const title = browser.getTitle()
        expect(browser).toHaveTitle("Lloyd's Developer Portal");
    })

    
})