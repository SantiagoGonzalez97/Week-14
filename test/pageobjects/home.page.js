class HomePage {

    get titlePage () {
        return $('#header_container > div.primary_header > div.header_label > div')
    }

    get productImage () {
        return $('#item_4_img_link > img')
    }

}

export default new HomePage();