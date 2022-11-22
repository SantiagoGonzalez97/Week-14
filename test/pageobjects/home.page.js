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
}

export default new HomePage();
//logout_sidebar_link