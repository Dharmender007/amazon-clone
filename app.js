
if(process.env.NODE !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const seedDB = require('./seed')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const User = require('./models/User')


const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const authRoutes = require('./routes/auth')
const cartRoutes = require('./routes/cart')




// mongoose.connect('mongodb://127.0.0.1:27017/shopping-sam-app')     // Data base connected
// .then(()=>{
//         console.log('DB connected successfully')
// })
// .catch((err)=>{
//       console.log('DB error')
//       console.log(err)
// })


// const dbURL = process.env.dbURL || 'mongodb://localhost:27017/shopping-sam-app';
const dbURL = process.env.dbURL;

mongoose.set('strictQuery', true);
mongoose.connect(dbURL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));




let configsession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly : true,
        expires: Date.now() + 24*7*60*60*1000,
        maxAge : 24*7*60*60*1000
    }
   
  }


app.engine('ejs', ejsMate)
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, 'views')) // for views folder
app.use(express.static(path.join(__dirname, 'public')))  // for public folder
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session(configsession));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session())


app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})




app.use(productRoutes)
app.use(reviewRoutes)
app.use(authRoutes)
app.use(cartRoutes)


// PASSPORT

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// seeding Database
// seedDB()








app.listen(8080 , ()=>{
    console.log('server connected sucessfully')
})