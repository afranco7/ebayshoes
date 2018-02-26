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

        let product1Name;
        let product1Price;
        let product2Name;
        let product2Price;
        let product3Name;
        let product3Price;
        let product4Name;
        let product4Price;
        let product5Name;
        let product5Price;

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

        describe('When taking the name and the price of the first 5 products', () => {
          beforeAll(async () => {
            const listOfProductsNamePage: ListOfProductsNamePage = new ListOfProductsNamePage();
            const listOfProductsPricePage: ListOfProductsPricePage = new ListOfProductsPricePage();
            
            product1Name=await listOfProductsNamePage.selectTop5Products(0);
            product1Price=await listOfProductsPricePage.selectTop5Products(0);

            product2Name=await listOfProductsNamePage.selectTop5Products(1);
            product2Price=await listOfProductsPricePage.selectTop5Products(1);

            product3Name=await listOfProductsNamePage.selectTop5Products(2);
            product3Price=await listOfProductsPricePage.selectTop5Products(2);

            product4Name=await listOfProductsNamePage.selectTop5Products(3);
            product4Price=await listOfProductsPricePage.selectTop5Products(3);

            product5Name=await listOfProductsNamePage.selectTop5Products(4);
            product5Price=await listOfProductsPricePage.selectTop5Products(4);

            console.log('Product 1: '+product1Name+' Price: '+product1Price);
            console.log('Product 2: '+product2Name+' Price: '+product2Price);
            console.log('Product 3: '+product3Name+' Price: '+product3Price);
            console.log('Product 4: '+product4Name+' Price: '+product4Price);
            console.log('Product 5: '+product5Name+' Price: '+product5Price); 
           
          });

      it('then should the products be the corrects', async () => {
        await expect(product1Name).toEqual("PUMA Men's Flip Flops Athletic Sandals Black Foam Size 10");
        await expect(product2Name).toEqual("Puma Kozyndan Londamned US 10 Eur 43 Slip On Sneakers Shoes Mens");
        await expect(product3Name).toEqual("Puma Mens Sneakers Stepper X Burn Rubber Castlerock Quarry Greek US 10 M");
        await expect(product4Name).toEqual("Mens Puma Sporty Look Trainers Evospeed");
        await expect(product5Name).toEqual("NEW Puma Men's Ketava Duo Dp Flip Flops Thong Sandals - 903");
      });
    });    
  });
});
});
});
});



  
