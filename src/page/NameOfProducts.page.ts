import { $$, ElementArrayFinder, promise } from 'protractor';

export class ListOfProductsNamePage {    

  private get getNameOfProducts(): ElementArrayFinder {       
    return $$('a.vip');
  }

  public selectTop5Products(valor): promise.Promise<string> { 
    return this.getNameOfProducts.get(valor).getText();
  }
}