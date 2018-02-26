import { $, ElementFinder, promise } from 'protractor';

export class ButtonSearchArticlePage {
  private get searchButton(): ElementFinder {
    return $('#gh-btn');
  }

  public clickOnSearch(): promise.Promise<void> {
    return this.searchButton.click();
  }
}