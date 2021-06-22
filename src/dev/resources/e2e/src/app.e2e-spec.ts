import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('User should be able to view celebrities and movies', () => {
  let baseUrl = "https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/";

  it('should load the webapp and verify url', async() => {
	browser.ignoreSynchronization = true;
	await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(2000);
  }),
  
  it('should be able to login to site and view celebrities', async() => {
	browser.ignoreSynchronization = true;
	await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(8000);
  }),
  
  it('should be able to click on movies', async() => {
	browser.ignoreSynchronization = true;
	await browser.get('https://webapp-bdso-test.apps.rhopenshift-dev.aceinfocoe.com/');
	expect(browser.getCurrentUrl()).toEqual(baseUrl + 'login?returnUrl=%2F');
	browser.sleep(3000);
  });
  
  
  
});
