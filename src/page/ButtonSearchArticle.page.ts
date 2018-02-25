import { $, ElementFinder, promise } from 'protractor';

export class ButtonSearchArticlePage {
  private get SearchButton(): ElementFinder {
    return $('#gh-btn');
  }

  public clickOnSearch(): promise.Promise<void> {
    return this.SearchButton.click();
  }
}