import LoginPage from  '../pageobjects/login.page';


describe('My Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty fields', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        await expect(LoginPage.btnLogin).toBeClickable();
    });
    it('Should not login whit invalid password', async () => {
        await LoginPage.login('standard_user', 'test');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.inputUsername).toHaveValueContaining('standard_user');
        await expect(LoginPage.inputPassword).toHaveValueContaining('test')
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await expect(LoginPage.btnLogin).toBeClickable();
    })
    it('Should not login whit invalid username', async () => {
        await LoginPage.login('test', 'secret_sauce');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.inputUsername).toHaveValueContaining('test');
        await expect(LoginPage.inputPassword).toHaveValueContaining('secret_sauce')
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await expect(LoginPage.btnLogin).toBeClickable();
    })
});


