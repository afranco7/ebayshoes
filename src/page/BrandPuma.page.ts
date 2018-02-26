import { $, ElementFinder, promise } from 'protractor';

export class BrandPumaPage {
  private get selectPuma(): ElementFinder {
    return $('#e1-51');
  }

  public selectBrandPuma(): promise.Promise<void> {
    return this.selectPuma.click();
  }
}