import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getEmailTextbox() {
    return element(by.name('email'));
  }
  getPasswordTextbox() {
    return element(by.name('password'));
  }

  getForm() {
    return element(by.css('#loginForm'));
  }
  getSubmitButton() {
    return element(by.css('#btnSubmit'));
  }
  getLogoutButton() {
    return element(by.css('#btnlogout'));
  }
btnAddarticle() {
  return element(by.css('#btnaddarticle'));
}
gettitleArticle() {
  return element(by.name('titleArticle'));
}
getDescriptionArticle() {
  return element(by.name('description'));
}
getsubmitArticle() {
  return element(by.css('#submitArticle'));
}
editTitleArticle() {
  return element(by.css('#updateTitleArticle'));
}
editContentArticle() {
  return element(by.css('#updateContentArticle'));
}
}

