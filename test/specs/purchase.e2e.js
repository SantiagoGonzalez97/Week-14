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
    it('Should add to cart', async () => {
        await HomePage.btnAddToCart.click();
    })
    it('Should remove off the cart', async () => {
        await HomePage.btnRemoveOfCart.click();
        await expect(HomePage.btnAddToCart).toBeClickable();
    })
    it('Should see the items show on the cart link', async () => {
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
})
