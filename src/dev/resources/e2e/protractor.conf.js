// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
	capabilities: {
     browserName: 'chrome', chromeOptions: { args: [ "--headless", "--disable-gpu", "--disable-extensions" ,"--window-size=800,600", "--ignore-certificate-errors", "--disable-dev-shm-usage", "--no-sandbox"] } 
  },
  // windows chrome driver settings
  //chromeDriver: 'C://Users/trayemo/Documents/Selenium-cucumber/Webdrivers/driver/chromedriver.exe',
  // linux-jenkins chrome-driver
  chromeDriver: '/var/lib/jenkins/chromedriver',
  directConnect: true,
  baseUrl: 'https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
 
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function() {}
  },
  allScriptsTimeout: 60000,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
	var jasmineReporters = require('jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './reports/xml',
    filePrefix: 'xmlresults'
}));
  },
  
  onComplete() {
     var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();
 
     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');
 
        var HTMLReport = require('protractor-html-reporter-2');
 
        testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: '../../../build/reports/html',
            outputFilename: 'ProtractorTestReport',
            screenshotPath: './reports/screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('./reports/xml/xmlresults.xml', testConfig);
    });
 }
  
};
