exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/Ebay.spec.js'],
    onPrepare: () => {
      browser.ignoreSynchronization = true;
    }
   }