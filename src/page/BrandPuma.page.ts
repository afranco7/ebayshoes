import { by, $, ElementFinder } from 'protractor';

export class BrandPumaPage {
  private get selectPuma(): ElementFinder {
    return $('.pnl.fashion>div>div>div#e1-50.cbx>a>input#e1-51.cbx');
  }  

  private get verifyPumaIsSelected(): ElementFinder {
    return $('#e1-58>a.cbx');
  }  
  
  public async selectBrandPuma() {
    return await this.selectPuma.click();    
  }

  public async verifyBrand(): Promise<string> {    
    if(await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')==="true"){
      return await this.verifyPumaIsSelected.getText();
    }
    
    return "Brand is not PUMA is: START"+await this.verifyPumaIsSelected.all(by.tagName('input')).get(0).getAttribute('checked')+"END";
  }
}