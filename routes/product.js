
// const express = require('express');
// const Product = require('../models/Product');
// const Review = require('../models/Review');
// const router = express.Router();  // mini instance/server like app
// const {validateProduct, isLoggedIn, isSeller,isProductAuthor} = require('../middlewares') 

// // to show all the products
// router.get('/products', async (req, res)=>{
//      try{
//         let products = await Product.find({})
//         res.render('products/index', {products} )
//      }
//      catch(e){
//           res.status(500).render('error', {err: e.message})
//      }
     

// })

// // to show the form for the new product
// router.get('/product/new', isLoggedIn, (req, res)=>{

//      try{
//      res.render('products/new')
//     }
//     catch(e){
//          res.status(500).render('error', {err: e.message})
//     }
// })

// // to actually add a product in DB
// router.post('/products', validateProduct, isLoggedIn, isSeller, async (req, res)=>{
// try{
//     let {name, img, price, desc}= req.body;
//     await Product.create({name, img, price, desc, author:req.user._id})

//     req.flash('success', 'Product added successfully');
//     res.redirect('/products')
// }
// catch(e){
//      res.status(500).render('error', {err: e.message})
// }

// })

// // to view a particular product
// router.get('/products/:id', isLoggedIn, async (req, res)=>{

//     try{
//     let {id} = req.params;
//     let foundProduct = await Product.findById(id).populate('reviews')
//     res.render('products/show', {foundProduct , msg:req.flash('msg')})
// }
// catch(e){
//      res.status(500).render('error', {err: e.message})
// }

// })



// //to edit a product
// router.get('/products/:id/edit',isLoggedIn,  async (req, res)=>{
//     try{
//     let {id} = req.params;
//     let foundProduct = await Product.findById(id)
//     res.render('products/edit', {foundProduct})
// }
// catch(e){
//      res.status(500).render('error', {err: e.message})
// }

// })

// //to actually edit the data in DB
// router.patch('/products/:id', validateProduct,isLoggedIn, async (req, res)=>{

//     try{
//     let {id} = req.params;
//     let {name, img, price, desc} = req.body
//    await Product.findByIdAndUpdate(id, {name, img, price, desc})

//    req.flash('success', 'Product edited successfully');

//     res.redirect(`/products/${id}`)
// }
// catch(e){
//      res.status(500).render('error', {err: e.message})
// }

// })

// // to delete a product
// router.delete('/products/:id', isLoggedIn, isProductAuthor, async (req, res)=>{

//     try{
//     let {id} = req.params;

//     const product = await Product.findById(id)

// //    for( let id of product.reviews){
// //             await Review.findByIdAndDelete(id)
// //    }



//    await Product.findByIdAndDelete(id)

//    req.flash('success', 'Product deleted successfully');

//     res.redirect('/products')
// }
// catch(e){
//      res.status(500).render('error', {err: e.message})
// }

// })



// module.exports = router



const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { validateProduct , isLoggedIn  , isSeller ,isProductAuthor} = require('../middlewares');
const {showAllProducts, productForm , createProduct , showProduct , editProductForm , updateProduct , deleteProduct} =  require('../collectors/product')

router.get('/products', showAllProducts );


router.get('/products/new', isLoggedIn, isSeller, productForm);

router.post('/products', isLoggedIn, isSeller, validateProduct, createProduct);

router.get('/products/:id', isLoggedIn, showProduct);


router.get('/products/:id/edit',isLoggedIn,isProductAuthor, editProductForm);

router.patch('/products/:id', isLoggedIn, isProductAuthor, validateProduct, updateProduct);

// router.patch('/products/:id', isLoggedIn, validateProduct, updateProduct);


router.delete('/products/:id',isLoggedIn,isProductAuthor,deleteProduct);


module.exports = router;