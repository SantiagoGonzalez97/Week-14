// import LoginPage from "../pageobjects/login.page";

// describe('When login whit locked user', () => {
//     beforeAll('Navigate to url', () => {
//         browser.url("https://www.saucedemo.com/");
//     })
//     it('Should not login whit invalid password', async () => {
//         await LoginPage.inputUsername.setValue("locked_out_user");
//         await LoginPage.inputPassword.setValue("test");
//         await LoginPage.btnLogin.click();
//         await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
//         await expect(LoginPage.errorMsg).toBeDisplayed();
//         await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
//         await expect(LoginPage.btnLogin).toBeClickable();
//     })
//     it('Should not let login, because it is a blocked user', async () => {
//         await LoginPage.inputUsername.setValue("locked_out_user");
//         await LoginPage.inputPassword.setValue("secret_sauce");
//         await LoginPage.btnLogin.click();
//         await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
//         await expect(LoginPage.errorLockedMsg).toBeDisplayed();
//         await expect(LoginPage.errorLockedMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
//         await expect(LoginPage.btnLogin).toBeClickable();
//     })
// })