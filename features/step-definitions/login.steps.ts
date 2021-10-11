import { Given, When, Then } from '@cucumber/cucumber';
import signRegister from '../pageobjects/log.page'
import registerPage from '../pageobjects/register.page'

Given(/^I am on the Home page \"([^\"]*)\"$/, async (appurl) =>{
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Given(/^I click on login module$/, async () => {
    await signRegister.clkOnSignin()
});

Given(/^I enter valid (.+)$/, async function (email: string) {
    await signRegister.enterValidEmail(email)
});

When(/^I click on create account button$/, async function () {
    await signRegister.submCreateButton()
});

When(/^I login with (.+), (.+)$/, async function (firstname: string, lastname: string) {
    await registerPage.enterfirsttlastname(firstname, lastname)
});
When(/^I enter (.+), (.+) and (.+)$/, async function (password: string, address: string, city: string) {
    await registerPage.enterPwdAddrCity(password, address, city)
    });

When(/^I enter (.+), (.+), (.+), (.+)$/, async function (state: string, zip: string, mobile: string, country: string) {
   
   /*for (let i = 0; i < await inputcountry.length; i++) {
        const elem = await (inputcountry[i]).getAttribute(country)
        if (elem == country) {
            await (inputcountry[i]).click()
            break;
        }
    }*/
    
  /*  for (let i = 0; i < inputstate.length; i++) {
        const elem = await (inputstate[i]).getAttribute(state)
       if (elem == state) {
           await (inputstate[i]).click()
            break;
        }
    }*/
    await registerPage.enterCountryStateZipMobile(state, zip, mobile, country)
});

When(/^I click on register button$/, async function () {
    await registerPage.submitCreateAcc()
});

Then(/^validate the Name of user is same as display$/, async function () {
    await expect(registerPage.header).toHaveText("Tom Smith")
});