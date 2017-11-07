import { ModuleWebpackPage } from './app.po';

describe('module-webpack App', () => {
  let page: ModuleWebpackPage;

  beforeEach(() => {
    page = new ModuleWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
