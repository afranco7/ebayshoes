import { $, ElementFinder, promise } from 'protractor';

export class SizeTenPage {
  private get sizeTen(): ElementFinder {
    return $('#e1-29');
  }

  public selectSizeTen(): promise.Promise<void> {
    return this.sizeTen.click();
  }
}