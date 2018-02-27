import { by, $, ElementFinder, promise } from 'protractor';

export class OrderByPriceAscendantPage {
  private get orderByPrice(): ElementFinder {    
    return $('#SortMenu');
  }

  public selectOrderByPriceAscendant(): promise.Promise<void> {
    $('.sort-menu-container>a').click();
    
    return this.orderByPrice.all(by.tagName('li')).get(2).click();
  }
}
