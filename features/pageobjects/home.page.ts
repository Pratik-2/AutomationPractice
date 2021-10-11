class productPage {
    get productlink() { return $("(//a[@title='Faded Short Sleeve T-shirts'][normalize-space()='Faded Short Sleeve T-shirts'])[1]") }
    get addCart() { return $("button[name='Submit'] span") }
    get pro_checkout() { return $("a[title='Proceed to checkout'] span") }
    get pro_checkout1() { return $("a[class='button btn btn-default standard-checkout button-medium'] span") }
    get pro_checkout2() { return $("button[name='processAddress'] span") }
    get pro_checkout3() { return $("button[name='processCarrier'] span") }
    get checkbox() { return $("//input[@id='cgv']") }
    get productHeader() { return $("//a[contains(text(),'Faded Short Sleeve T-shirts')]") }


    async selectProduct() {
        await this.productlink.click()
    }
    async addToCart() {
        await this.addCart.isDisplayed()
        await this.addCart.click()
        await this.pro_checkout.isDisplayed()
        await this.pro_checkout.click()
    }
    async checkOutSummary() {
        await this.pro_checkout1.isDisplayed()
        await this.pro_checkout1.click()
    }
    async checkOutAddress() {
        await this.pro_checkout2.click()
    }
    async checkOutShiping() {
                await this.checkbox.click()
        await this.pro_checkout3.click()
    }

} export default new productPage()