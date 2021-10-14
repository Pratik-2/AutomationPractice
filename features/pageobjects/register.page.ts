import Testdata from '../resources/tesdata.json'
class registerPage {
    get inputfirstname() { return $("//input[@id='customer_firstname']") }
    get inputlastname() { return $("//input[@id='customer_lastname']") }
    get inputpassword() { return $("//input[@id='passwd']") }
    get inputaddress() { return $("//input[@id='address1']") }
    get inputcity() { return $("//input[@id='city']") }
    get inputcountry() { return $("//select[@id='id_country']") }
    get inputstate() { return $("#id_state") }
    get inputzip() { return $("//input[@id='postcode']") }
    get inputmobile() { return $("//input[@id='phone_mobile']") }
    get subbutn() { return $("//button[@id='submitAccount']") }
    get header() { return $("//span[contains(text(),'Tom')]") }

    /*async enterfirsttlastname(firstname: string, lastname: string) {*/
        async enterfirsttlastname() {
        await this.inputfirstname.setValue(Testdata.firstname)
        await this.inputlastname.setValue(Testdata.lastname)
    }

    /*async enterPwdAddrCity(password: string, address: string, city: string) {*/
        async enterPwdAddrCity() {
        await this.inputpassword.setValue(Testdata.password)
        await this.inputaddress.setValue(Testdata.address)
        await this.inputcity.setValue(Testdata.city)
    }

   /* async enterCountryStateZipMobile(state: string, zip: string, mobile: string, country: string) {*/
        async enterCountryStateZipMobile() {

        await this.inputcountry.selectByVisibleText(Testdata.country)
        await this.inputstate.selectByVisibleText(Testdata.state)
            await this.inputzip.setValue(Testdata.zip)
            await this.inputmobile.setValue(Testdata.mobile)
    }

    async submitCreateAcc() {
        await this.subbutn.click()
    }
} export default new registerPage()