import LoginPage from "../pageobjects/login.page";

describe('When login whit problem user', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should be problems', async () => {
        await LoginPage.inputUsername.setValue("problem_user");
        await LoginPage.inputPassword.setValue("secret_sauce");
        await LoginPage.btnLogin.click();
    })
    it('Should redirect to inventory URL when logged', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should not see the inventory products, instead a dog image is shown', async () => {
        await expect(LoginPage.productImage).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg');
    })
})