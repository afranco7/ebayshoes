import { by, $, ElementFinder } from 'protractor';

export class BrandPumaPage {
  private get selectPuma(): ElementFinder {
    return $('.brnd>div#e1-52>a');
  }  

  private get searchBrand(): ElementFinder {
    return $('.pnl.fashion>div>input');
  }  

  private get verifyPumaIsSelected(): ElementFinder {
    return $('#e1-58>a.cbx');
  }  
  
  public async selectBrandPuma() {
    await this.searchBrand.sendKeys("PUMA");
    return await this.selectPuma.all(by.tagName('input')).get(0).click();
  }

  public async verifyBrand(): Promise<string> {    
    if(await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')==="true"){
      return await this.verifyPumaIsSelected.getText();
    }
    
    return "Brand is not PUMA is: START"+await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')+"END";
  }
}