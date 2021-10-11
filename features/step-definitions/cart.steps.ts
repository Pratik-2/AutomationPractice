import { Given, When, Then } from '@cucumber/cucumber';
import productPage from '../pageobjects/home.page'

Given(/^I select product$/, async () =>  {
    await productPage.selectProduct()
});

When(/^checking summary proceed$/, async () => {
  /*  await browser.setTimeout({ 'implicit': 5000 })*/
    await productPage.checkOutSummary()
});

When(/^checking address proceed$/, async function () {
    await productPage.checkOutAddress()
});

When(/^checking shipping proceed$/, async function () {
    await productPage.checkOutShiping
});

Then(/^I validate the product$/, async function () {
    await expect(productPage.productHeader).toHaveText("Faded Short Sleeve T-shirts")
 });
