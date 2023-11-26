
const mongoose = require('mongoose')

const Product = require('./models/Product')

const products = [
     // first product
    {
        name: "APPLE iPhone 13",
        img:"https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70",
        price: 59999,
        desc: "128 GB ROM , 15.49 cm (6.1 inch) Super Retina XDR Display , 12MP + 12MP | 12MP Front Camera , A15 Bionic Chip Processor"  
    },
 
    // second product
    {
        name: "Apple 20W ,USB-C Power Charging Adapter for iPhone",
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/battery-charger/u/b/p/-original-imagqjh6gg35h7hz.jpeg?q=70",
        price: 1579,
        desc: "The Apple 20W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go."
    },

    // third product
    {
        name: "APPLE iPhone wired Earphone",
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/g/4/original-100-earphone-for-iphone-14-13-12-11-7-8-pro-max8-original-imagr4nhsg2puwpn.jpeg?q=70",
        price: 989,
        desc:"Introducing its elegant Luxury Flex Grip connection prevents cable damage Perfect headset for disturbance free experience Maximum comfort and super performance Excellent for interactive games Compatible with iPhone and All audio jack devices"
    },

    // fouth product
    {
        name: "APPLE 2020 Macbook Air M1",
        img:"https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
        price: 81990,
        desc:"Stylish & Portable Thin and Light Laptop ,13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) , Light Laptop without Optical Disk Drive"
    },

    //fifth product
    {
        name: "APPLE Airpods",
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/s/t/m/-original-imaghxgnjdgyghfw.jpeg?q=70",
        price: 22990,
        desc:"AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalised Spatial Audio with dynamic head tracking for immersive sound. Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time."
    },


    //sixth product
    {
        name: "APPLE APPLE Watch SE GPS (2nd Gen)",
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/i/1/m/-original-imaghxg3nyd3dhwp.jpeg?q=70",
        price: 26999,
        desc:"Essential features to help you stay connected, active, healthy and safe"
    }


]


 async function seedDB(){
    await Product.insertMany(products)
    console.log('Data seeded successfully')

}

module.exports = seedDB;