import { FinanceFormPage } from './app.po';

describe('finance-form App', function() {
  let page: FinanceFormPage;

  beforeEach(() => {
    page = new FinanceFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
