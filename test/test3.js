//Includes
/*const{Builder,By,Key,until,Actions} = require('selenium-webdriver');
const should = require('chai').should();

/* 
As a customer, I want to be able to search for a product, so that I can find the product
I want to buy.
*/
// Tesst grouping search
/*describe('Search for product',()=>{
    //Test case:

   context('I search for a product', ()=> {
        it ('I should see the product that I have searched for', async () =>{
            // start web browser
            const driver = await new Builder().forBrowser('firefox').build();
            // search for a product
            try{
                // Move to magento site
           await driver.get('https://magento.softwaretestingboard.com/');
           const TopsInWomen = await driver.findElement(By.css('li.level0:nth-child(2)'));
           await Women.click();

           //const Tops = await driver.findElement(By.css('.nav-2-1 > ul:nth-child(2)'));
           const women = await driver.findElement(By.css('#ui-id-9')).click();
           //await Tops.click();

           //Get the search input
           //await driver.wait(until.elementLocated(By.css('#search')),1000);
           //await driver.findElement(By.id('search')).sendKeys('Tees',Key.RETURN);

           //Find the first product
           await driver.wait(until.elementLocated(By.css('.product-item:first-child')),1000);
           const product = await driver.findElement(By.css('.product-item:first-child'));

           // Find information in the product we selected
           let productTitle = await product.findElement(By.css('.product-item-link'));
           let productPrice = await product.findElement(By.css('.price'));

           //Extract text
           let productTitleText = await productTitle.getText();
           let productPriceText = await productPrice.getText();

           productTitleText.should.equal('Radiant Tee');
           productPriceText.should.equal('$22.00');

         //const products= await driver.findElement(By.className('product name product-item-name')).getText();
         
         //for (const product of products) {
            // Do something with the product element
            console.log(await product.getText());
          //}

            }catch(error){
                console.log(error);
            }finally{
            await driver.quit();
            }
            
        });
    });
});
*/