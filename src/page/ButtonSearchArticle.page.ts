import { $, ElementFinder } from 'protractor';

export class ButtonSearchArticlePage {
  private get searchButton(): ElementFinder {
    return $('#gh-btn');
  }

  public async clickOnSearch() {    
    return await this.searchButton.click();
  }
}
