import { browser } from 'protractor';

describe('Given a SDET on protractor', () => {
  describe('when open Ebay Page', () => {
    beforeEach(() => {
      browser.get('http://www.ebay.com');
    });
     
    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay');
    });
  });
 });