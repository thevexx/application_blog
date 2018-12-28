import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Test Application', () => {
    page.navigateTo();
    browser.sleep(2000);
  });
});
