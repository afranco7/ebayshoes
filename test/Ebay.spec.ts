import { browser } from 'protractor';
import { InputArticlePage,
         ButtonSearchArticlePage,
         BrandPumaPage,
         SizeTenPage,
         NumberOfResultsPage,
         OrderByPriceAscendantPage,
         ListOfProductsNamePage,
         ListOfProductsPricePage 
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

      describe('When filtering for brand and size', () => {
        beforeAll(async () => {
          const brandPumaPage: BrandPumaPage = new BrandPumaPage();
          const sizeTenPage: SizeTenPage = new SizeTenPage();
  
          await brandPumaPage.selectBrandPuma();
          await sizeTenPage.selectSizeTen();
        });

    describe('When Showing number of results', () => {
      beforeAll(async () => {
        const numberOfResultsPage: NumberOfResultsPage = new NumberOfResultsPage();
        let results;

        results = await numberOfResultsPage.showNumberOfResults();
        console.log('The number of results for brand PUMA and size 10 is '+results);
      });

      describe('When sorting the results by price', () => {
        beforeAll(async () => {
          const orderByPriceAscendantPage: OrderByPriceAscendantPage = new OrderByPriceAscendantPage();         
  
          await orderByPriceAscendantPage.selectOrderByPriceAscendant();          
        });

        let product1Name;

        describe('When taking the name and the price of the first 5 products', () => {
          beforeAll(async () => {
            const listOfProductsNamePage: ListOfProductsNamePage = new ListOfProductsNamePage();
            const listOfProductsPricePage: ListOfProductsPricePage = new ListOfProductsPricePage();
            
            product1Name=await listOfProductsNamePage.selectTop5Products(0);

            console.log('Product 1: '+await listOfProductsNamePage.selectTop5Products(0)+' Price: '+await listOfProductsPricePage.selectTop5Products(0));
            console.log('Product 2: '+await listOfProductsNamePage.selectTop5Products(1)+' Price: '+await listOfProductsPricePage.selectTop5Products(1));
            console.log('Product 3: '+await listOfProductsNamePage.selectTop5Products(2)+' Price: '+await listOfProductsPricePage.selectTop5Products(2));
            console.log('Product 4: '+await listOfProductsNamePage.selectTop5Products(3)+' Price: '+await listOfProductsPricePage.selectTop5Products(3));
            console.log('Product 5: '+await listOfProductsNamePage.selectTop5Products(4)+' Price: '+await listOfProductsPricePage.selectTop5Products(4));
           
          });

      it('then should the productd be the corrects', async () => {
        await expect(product1Name).toEqual("PUMA Men's Flip Flops Athletic Sandals Black Foam Size 10");
      });
    });    
  });
});
});
});
});



  
