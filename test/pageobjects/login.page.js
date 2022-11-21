

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    get titlePage () {
        return $('#header_container > div.primary_header > div.header_label > div')
    }

    get errorLockedMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3')
    }

    get productImage () {
        return $('#item_4_img_link > img')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new LoginPage();
