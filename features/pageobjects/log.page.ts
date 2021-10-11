class signRegister {

    get signinButton() { return $("//a[contains(text(),'Sign in')]") }
    get emailenter() { return $("//input[@id='email_create']") }
    get creatacbt() { return $("//span[normalize-space()='Create an account']")}
    

    async clkOnSignin() {
        await this.signinButton.click()
    }
    async enterValidEmail(email: string) {
        await this.emailenter.setValue(email)
    }
    async submCreateButton() {
        await this.creatacbt.click()
    }
} export default new signRegister()