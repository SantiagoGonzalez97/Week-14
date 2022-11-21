import LoginPage from "../pageobjects/login.page";

describe('When login whit locked user', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should not let login', async () => {
        await LoginPage.inputUsername.setValue("locked_out_user");
        await LoginPage.inputPassword.setValue("secret_sauce");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorLockedMsg).toBeDisplayed();
        await expect(LoginPage.errorLockedMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await expect(LoginPage.btnLogin).toBeClickable();
    })
})