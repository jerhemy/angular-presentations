import { ModulesWebpackPage } from './app.po';

describe('modules-webpack App', () => {
  let page: ModulesWebpackPage;

  beforeEach(() => {
    page = new ModulesWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
