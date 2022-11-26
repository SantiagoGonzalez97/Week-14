import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('When login whit standard user', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should can login whit valid credentials', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.inputUsername).toHaveValueContaining('test');
        await expect(LoginPage.inputPassword).toHaveValueContaining('secret_sauce');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await expect(LoginPage.btnLogin).toBeClickable();
    })
})
