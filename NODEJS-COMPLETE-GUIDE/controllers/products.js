const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render(
        'add-product', // Views: all
        {
            pageTitle: 'Add Product', // Views: all
            path: '/admin/add-product' // Views: all
            
            // , // Views: hbs
            // formsCSS: true, // Views: hbs
            // productCSS: true, // Views: hbs
            // activeAddProduct: true // Views: hbs
        }
    );
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}; // Views: all

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(); // Views: all
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