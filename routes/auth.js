const express = require('express')

const User = require('../models/User');
const passport = require('passport');
const router = express.Router();  // mini instance/server like app 


// to show the form of sign up 
router.get('/register', (req, res)=>{
    res.render('auth/signup')
})

// to actually store in DB
router.post('/regitser',  async (req, res)=>{
    try{
        let {username, password, email,role} = req.body;
        const user = new User({username, email, role})
        const newUser = await User.register(user, password)
        // res.redirect('/login')
        req.login(newUser, function(err){
           if(err){return next(err)}
           req.flash('success', 'welcome, you register succcessfully')
          return res.redirect('/products')
        })
    }
    catch(e){
        req.flash('error', e.message)
       return res.redirect('/products')
   }
   
})


// to show the login in form
router.get('/login', (req, res)=>{
    res.render('auth/login')
})


// to actually login via DB
router.post('/login',
 passport.authenticate('local', { 
    failureRedirect: '/login' ,
    failureMessage: true
}),
(req, res)=>{
    let {username, password, email} = req.body;
    //  req.flash('success', 'welcome back')
     req.flash('success', `welcome back ${username}`)
     res.redirect('/products')
})


// to logout 
router.get('/logout', (req, res)=>{
    ()=>{
     req.logout();
    }
    req.flash('success', 'You logged out')
    res.redirect('/login')
})


module.exports = router