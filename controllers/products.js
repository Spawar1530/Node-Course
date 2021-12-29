const Product = require("../models/product")

const path = require("path");

exports.getAddProduct = (req, res, next) => {
    res.render('add-product.ejs', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    })}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop.ejs', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })
  }
