describe('index tests', () => {

    it('should have the right title', () => {
        browser.url('https://sand-developerportal-lloydsapi.azurewebsites.net/')
        const title = browser.getTitle()
        expect(browser).toHaveTitle("Lloyd's API Development Portal");
    })


    it('Console logs', () => {
          // var browserLogs = browser.url('https://sand-developerportal-lloydsapi.azurewebsites.net').log('browser');
        // console.log(browserLogs);

        browser.url('https://sand-developerportal-lloydsapi.azurewebsites.net');

        // todo: NEED TO FIND A WAY TO EXPORT CONSOLE LOGS...

        // browser.log('browser').then((res) => {
        //     res.value.forEach( (element) => {
        //     expect(element.level).not.toBe('ERROR');
        //     });
        //     console.log('result: ', res)
        //     })
        //     .catch( (err) => {
        //     console.log(err);
        //     })
    })


})