// import LoginPage from "../pageobjects/login.page";
// import HomePage from "../pageobjects/home.page";


// describe('When login whit problem user', () => {
//     beforeAll('Navigate to url', () => {
//         browser.url("https://www.saucedemo.com/");
//     })
//     it('Should not login whit invalid username', async () => {
//         await LoginPage.inputUsername.setValue("test");
//         await LoginPage.inputPassword.setValue("secret_sauce");
//         await LoginPage.btnLogin.click();
//         await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
//         await expect(LoginPage.inputUsername).toHaveValueContaining('test');
//         await expect(LoginPage.inputPassword).toHaveValueContaining('secret_sauce');
//         await expect(LoginPage.errorMsg).toBeDisplayed();
//         await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
//         await expect(LoginPage.btnLogin).toBeClickable();
//     })
//     it('Should not login whit invalid password', async () => {
//         await LoginPage.inputUsername.setValue("problem_user");
//         await LoginPage.inputPassword.setValue("test");
//         await LoginPage.btnLogin.click();
//         await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
//         await expect(LoginPage.inputUsername).toHaveValueContaining('problem_user');
//         await expect(LoginPage.inputPassword).toHaveValueContaining('test');
//         await expect(LoginPage.errorMsg).toBeDisplayed();
//         await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
//         await expect(LoginPage.btnLogin).toBeClickable();
//     })
//     it('Should login whit validate credentials', async () => {
//         await LoginPage.login('problem_user', 'secret_sauce');
//     })
//     it('Should have a title when logged in the main page', async () => {
//         await expect(HomePage.titlePage).toHaveTitle('Swag Labs');
//     })
//     it('Should redirect to inventory URL when logged', async () => {
//         await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
//     })
//     // The following test throw an error because this image does not show on the inventory:
//     // it('Should see in the inventory products like this', async () => {
//     //     await expect(HomePage.productImage).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
//     // })
//     it('Should log out', async () => {
//         await HomePage.btnBurger.waitForDisplayed({timeout: 5000});
//         await HomePage.btnBurger.click();
//         await HomePage.btnLogout.waitForDisplayed({timeout: 5000});
//         await HomePage.btnLogout.click();
//         await expect(browser).toHaveUrl('https://www.saucedemo.com/');
//     })
// })