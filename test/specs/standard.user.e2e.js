import LoginPage from "../pageobjects/login.page";

describe('When login whit standard user', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should login whit validate credentials', async () => {
        await LoginPage.inputUsername.setValue("standard_user");
        await LoginPage.inputPassword.setValue("secret_sauce");
        await LoginPage.btnLogin.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should have a title when logged in the main page', async () => {
        await expect(LoginPage.titlePage).toHaveTitle('Swag Labs');
    })
    it('Should redirect to inventory URL when logged', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should see in the inventory products like this', async () => {
        await expect(LoginPage.productImage).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
})