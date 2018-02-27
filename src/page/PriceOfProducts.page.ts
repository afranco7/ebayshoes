import { $$, ElementArrayFinder, promise } from 'protractor';

export class ListOfProductsPricePage {    

  private get getPriceOfProducts(): ElementArrayFinder {       
    return $$('span.bold');
  }

  public selectTop5Products(valor): promise.Promise<string> { 
    return this.getPriceOfProducts.get(valor).getText();
  }
}
