const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render(
        'add-product', // Views: all
        {
            pageTitle: 'Add Product', // Views: all
            path: '/admin/add-product', // Views: all
    
            // formsCSS: true, // Views: hbs
            // productCSS: true, // Views: hbs
            // activeAddProduct: true // Views: hbs
        }
    );
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
}; // Views: all

exports.getProducts = (req, res, next) => {
    res.render(
        'shop',
        {
            prods: products, // Views: all
            pageTitle: 'Shop', // Views: all
            path: '/' // Views: all
            
            // , // Views: hbs
            // hasProducts: products.length > 0, // Views: hbs
            // activeShop: true, // Views: hbs
            // productCSS: true // Views: hbs
        }
    );
};