class LoginPage {

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

    get errorLockedMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

export default new LoginPage();
