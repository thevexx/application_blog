import { LoginPage } from './login.po';
import { browser } from 'protractor';
describe('TEST', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });


  // login and password valid and add article valid
  it('login and password valid and add article valid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     console.log('buton clicked');
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     browser.sleep(4000);
     page.btnAddarticle().click();
     page.gettitleArticle().sendKeys('upload image');
     page.getDescriptionArticle().sendKeys('my first article in blog');
     browser.sleep(4000);
     const path = require('path');
     const fileToUpload = '../../01.jpg';
        const linkFile = path.resolve(__dirname, fileToUpload);
         console.log('**************************************pathh********************************', linkFile);
     page.btnInput().sendKeys(linkFile);

page.getsubmitArticle().click();
browser.sleep(4000);
   });

    /* login and password valid and title article invalid
  it(' login and password valid and title article invalid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     console.log('buton clicked');
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     page.btnAddarticle().click();
     page.gettitleArticle().sendKeys('aze');
     page.getDescriptionArticle().sendKeys('my first article in blog');
     page.getsubmitArticle();
     browser.sleep(8000);
   });

  // login and password valid and content article invalid
  it('login and password valid and content article invalid', () => {
    page.getEmailTextbox().sendKeys('za@gmail.com');
     page.getPasswordTextbox().sendKeys('12345678');
     const testBackend = '200';
     page.getSubmitButton().click();
     browser.pause();
     console.log('buton clicked');
     const backendLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
     expect(backendLocalStorage).toEqual(testBackend);
     browser.sleep(4000);
     page.btnAddarticle().click();
     page.gettitleArticle().sendKeys('my first');
     page.getDescriptionArticle().sendKeys('myb');
     page.getsubmitArticle();
     browser.sleep(8000);
   });

it('login valid and password valid', () => {
  page.getEmailTextbox().sendKeys('za@gmail.com');
  page.getPasswordTextbox().sendKeys('12345678');
    page.getSubmitButton().click();
    const testBackend = '200';
    console.log('buton clicked');
    browser.pause();
    const passwordLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
    expect(passwordLocalStorage).toEqual(testBackend);
    browser.sleep(5000);
  });

it('login invalid and password valid', () => {
  page.getEmailTextbox().sendKeys('zzzzzzzz@gmail.com');
  page.getPasswordTextbox().sendKeys('12345678');
    page.getSubmitButton().click();
    const testBackend = '401';
    console.log('buton clicked');
    browser.pause();
    const passwordLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
    expect(passwordLocalStorage).toEqual(testBackend);
    browser.sleep(5000);
  });

    it('login valid and password invalid', () => {
      page.getEmailTextbox().sendKeys('za@gmail.com');
        page.getPasswordTextbox().sendKeys('azrtyerr');
        page.getSubmitButton().click();
        const testBackend = '401';
        console.log('buton clicked');
        browser.pause();
        const valLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
        expect(valLocalStorage).toEqual(testBackend);
        browser.sleep(5000);
      });

      it('login invalid and password invalid', () => {
        page.getEmailTextbox().sendKeys('zsssqa@gmail.com');
          page.getPasswordTextbox().sendKeys('azrtyerr');
          page.getSubmitButton().click();
          const testBackend = '401';
          console.log('buton clicked');
          browser.pause();
          const valLocalStorage = browser.executeScript('return window.localStorage.getItem(\'response\');');
          expect(valLocalStorage).toEqual(testBackend);
          browser.sleep(5000);
        });*/
});

