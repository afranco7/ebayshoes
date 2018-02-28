import { by, $, $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class BrandPumaPage {
  private get selectPuma(): ElementArrayFinder {
    return $$('.brnd>div>a');
  }

  private get verifyPumaIsSelected(): ElementFinder {
    return $('#e1-58>a.cbx');
  }  
  
  public async selectBrandPuma() {
    
    for (let i = 7 ;i >=0 ;i--)
    {      
      if (await this.selectPuma.all(by.css('a>span')).get(i).getText() === 'PUMA'){
         return await this.selectPuma.get(i).click();
      }      
    }

    return 'PUMA brand was not found';      
  }

  public async verifyBrand(): Promise<string> {    
    if (await this.verifyPumaIsSelected
      .all(by.tagName('input')).get(0).getAttribute('checked') === 'true') {
      return await this.verifyPumaIsSelected.getText();
    }
    
    return 'there is not brand selected';
  }
}
