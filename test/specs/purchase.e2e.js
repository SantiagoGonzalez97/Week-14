import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';



describe('When standard user try to purchase', () => {
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
    it('Should redirect to inventory URL when logged', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Should have a title when logged in the main page', async () => {
        await expect(HomePage.titlePage).toHaveTitle('Swag Labs');
    })
    it('Should see in the inventory this item', async () => {
        await expect(HomePage.productImage).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('Should add the item to cart', async () => {
        await HomePage.btnAddToCart.click();
    })
    it('Should remove the item off the cart', async () => {
        await HomePage.btnRemoveOfCart.click();
        await expect(HomePage.btnAddToCart).toBeClickable();
    })
    it('Should see the items show on the cart link whit an item on', async () => {
        await HomePage.btnAddToCart.click();
        await HomePage.btnCart.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    })
    it('Should go back if the user click on "Continue shopping"', async () => {
        await HomePage.btnContinueShopping.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Should redirect to checkout form page when clicking', async () => {
        await HomePage.btnCart.click();
        await HomePage.btnCheckout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
    it('Should go back to cart page when clicking', async () => {
        await HomePage.btnCancel.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    })
    it('Should checkout information', async () => {
        await HomePage.btnCheckout.click();
        await HomePage.inputFirstName.setValue("test");
        await expect(HomePage.inputFirstName).toHaveValueContaining("test");
        await HomePage.inputLastName.setValue("test");
        await expect(HomePage.inputLastName).toHaveValueContaining("test");
        await HomePage.inputPostalCode.setValue("2000");
        await expect(HomePage.inputPostalCode).toHaveValueContaining("2000");
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
    it('Should see the checkout overview when clicking', async () => {
        await HomePage.btnContinue.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
    it('Should finish the purchase when clicking', async () => {
        await HomePage.btnFinish.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    })
    it('Should go back to inventory page when clicking', async () => {
        await HomePage.btnBackHome.click();
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
