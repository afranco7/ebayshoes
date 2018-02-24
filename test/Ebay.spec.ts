import { browser } from 'protractor';

describe('Given a SDET on protractor', () => {
  describe('when open Ebay Page', () => {
    beforeEach( async () => {
      await browser.get('http://www.ebay.com');
    });
     
    it('then should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay');
    });
  });
 });