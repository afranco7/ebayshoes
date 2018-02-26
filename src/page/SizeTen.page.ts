import { $, ElementFinder } from 'protractor';

export class SizeTenPage {
  private get sizeTen(): ElementFinder {
    return $('#e1-29');
  }

  private get verifySize10IsSelected(): ElementFinder {
    return $('#e1-56>span.crossTitle');
  }

  public async selectSizeTen(): Promise<string> {    
    await this.sizeTen.click();

    return await this.verifySize10IsSelected.getText();
  }
}