class HomePage {

    get titlePage () {
        return $('#header_container > div.primary_header > div.header_label > div');
    }

    get productImage () {
        return $('#item_4_img_link > img');
    }

    get btnBurger () {
        return $('#react-burger-menu-btn');
    }

    get btnLogout () {
        return $('#logout_sidebar_link');
    }

    get btnAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnRemoveOfCart () {
        return $('#remove-sauce-labs-backpack');
    }

    get btnCart () {
        return $('#shopping_cart_container');
    }

    get btnContinueShopping() {
        return $('#continue-shopping');
    }

    get btnCheckout() {
        return $('#checkout');
    }

    get inputFirstName() {
        return $('#first-name');
    }

    get inputLastName() {
        return $('#last-name');
    }

    get inputPostalCode() {
        return $('#postal-code');
    }

    get btnCancel() {
        return $('#cancel');
    }

    get btnContinue() {
        return $('#continue');
    }

    get btnFinish() {
        return $('#finish');
    }

    get btnBackHome() {
        return $('#back-to-products');
    }

    get btnTwitter() {
        return $('#page_wrapper > footer > ul > li.social_twitter');
    }

    get btnFacebook() {
        return $('#page_wrapper > footer > ul > li.social_facebook');
    }

    get btnFacebook() {
        return $('#page_wrapper > footer > ul > li.social_linkedin');
    }
}



export default new HomePage(); 