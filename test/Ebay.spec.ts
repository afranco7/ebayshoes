import { browser } from 'protractor';
import { InputArticlePage,
         ButtonSearchArticlePage     
} from '../src/page';

describe('Given Ebay page', () => { 
    beforeAll( async () => {
      await browser.get('http://www.ebay.com');
    });

    describe('When search for shoes', () => {
      beforeAll(async () => {
        const inputArticlePage: InputArticlePage = new InputArticlePage();
        const buttonSearchArticlePage: ButtonSearchArticlePage = new ButtonSearchArticlePage();

        await inputArticlePage.enterSearchValues("Shoes");
        await buttonSearchArticlePage.clickOnSearch();
      });

    describe('Process to search shoes', () => {
      beforeAll(async () => {
        console.log("hay q dormir");
      });

      it('then should the t-shirt be bought', async () => {
        await expect(browser.getTitle()).toEqual('Shoes | eBay');
      });
    });    
  });
});



  
