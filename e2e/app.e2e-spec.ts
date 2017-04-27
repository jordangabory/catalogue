import { CataloguePage } from './app.po';

describe('catalogue App', () => {
  let page: CataloguePage;

  beforeEach(() => {
    page = new CataloguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
