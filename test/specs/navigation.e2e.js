import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('When navigate whit standard user', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/");
    })
    it('Should login whit valid credentials', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await expect(LoginPage.inputUsername).toHaveValueContaining('standard_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await expect(LoginPage.inputPassword).toHaveValueContaining('secret_sauce');
        await LoginPage.btnLogin.click();
    })
    it('Should have a title when logged in the main page', async () => {
        await expect(HomePage.titlePage).toHaveTitle('Swag Labs');
    })
    it('Should redirect to inventory URL when logged', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should redirect to twitter sauce labs page', async () => {
        await HomePage.btnTwitter.click();
        await browser.switchWindow('saucelabs');
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        await browser.closeWindow();
        await browser.switchWindow('inventory');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should redirect to facebook sauce labs page', async () => {
        await HomePage.btnFacebook.click();
        await browser.switchWindow('saucelabs');
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        await browser.closeWindow();
        await browser.switchWindow('inventory');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should redirect to linkedin sauce labs page', async () => {
        await HomePage.btnLinkedin.click();
        await browser.switchWindow('sauce-labs');
        await expect(browser).toHaveUrlContaining('www.linkedin.com');
        await browser.closeWindow();
        await browser.switchWindow('inventory');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should redirect to about sauce labs page', async () => {
        await HomePage.btnBurger.waitForDisplayed({timeout: 5000});
        await HomePage.btnBurger.click();
        await HomePage.btnAbout.waitForDisplayed({timeout: 5000});
        await HomePage.btnAbout.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await browser.back();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should log out', async () => {
        await HomePage.btnBurger.waitForDisplayed({timeout: 5000});
        await HomePage.btnBurger.click();
        await HomePage.btnLogout.waitForDisplayed({timeout: 5000});
        await HomePage.btnLogout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })
})