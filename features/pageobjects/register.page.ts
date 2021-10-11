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

    async enterfirsttlastname(firstname: string, lastname: string) {
        await this.inputfirstname.setValue(firstname)
        await this.inputlastname.setValue(lastname)
    }

    async enterPwdAddrCity(password: string, address: string, city: string) {
        await this.inputpassword.setValue(password)
        await this.inputaddress.setValue(address)
        await this.inputcity.setValue(city)
    }

    async enterCountryStateZipMobile(state: string, zip: string, mobile: string, country: string) {
        await this.inputcountry.selectByVisibleText(country)
        await this.inputstate.selectByVisibleText(state)
        await this.inputzip.setValue(zip)
        await this.inputmobile.setValue(mobile)
    }

    async submitCreateAcc() {
        await this.subbutn.click()
    }
} export default new registerPage()