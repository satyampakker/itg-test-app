import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('User should be able to view forgot password screen', () => {
  let baseUrl = "https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/";

  it('should load the webapp and verify url', async() => {
	browser.ignoreSynchronization = true;
    await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(2000);
  }),
  
  it('should be able to click forget password', async() => {
	browser.ignoreSynchronization = true;
    await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(2000);
  }),
  
  it('should be able to enter username/email', async() => {
	browser.ignoreSynchronization = true;
    await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(1000);
  });
  
  
  
});
