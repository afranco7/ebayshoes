import { by, $, ElementFinder } from 'protractor';

export class BrandPumaPage {
  private get selectPuma(): ElementFinder {
    return $('#e1-40');
  }

  private get checkBoxPuma(): ElementFinder {
    return $('#e1-51');
  }

  private get verifyPumaIsSelected(): ElementFinder {
    return $('#e1-58>a.cbx');
  }
  
  private async typeBrandPuma(brand) {
    await this.selectPuma.click();
    return await this.selectPuma.sendKeys(brand);
  }
  
  public async selectBrandPuma(brand) {
    await this.typeBrandPuma(brand);
    await this.checkBoxPuma.click();
  }

  public async verifyBrand(): Promise<string> {    
    if(await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')==="true"){
      return await this.verifyPumaIsSelected.getText();
    }
    
    return "Brand is not PUMA is: START"+await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')+"END";
  }
}