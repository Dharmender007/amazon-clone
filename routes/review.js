const express = require('express');
const Review = require('../models/Review');
const Product = require('../models/Product');
const router = express.Router();  // mini instance/server like app 
const {validateReview} = require('../middlewares') 


// to show and add the review
// router.post('/products/:id/review', validateReview, async(req, res)=>{ // if we run this validateion we have to make no validate and required in the form of review in show file
    // router.post('/products/:id/review',  async(req, res)=>{
        router.post('/products/:id/review', async(req, res)=>{

    try{
        let {id} = req.params
        let {rating, Comment} = req.body
        const product = await Product.findById(id)
        const review = new Review({rating, Comment})
   
       product.reviews.push(review)
       await review.save()
       await product.save()

       req.flash('success', 'Review added successfully')
   
       res.redirect(`/products/${id}`)
    }
    catch(e){
        res.status(500).render('error', {err: e.message})
   }

     
})

// to delete the review

// router.post('/products/:id/delete', async(req, res)=>{
//     let {id}= req.params
//     for(let product of Product.reviews){
//         product.findByIdAnd(id)
//     }
//     res.render('products/show')
// })





















module.exports = router