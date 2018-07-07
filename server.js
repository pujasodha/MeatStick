const dotenv = require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
var nodemailer = require('nodemailer');
// const reactShopify = require('react-shopify')


const apiKey = process.env.SHOPIFY_API_KEY;
// console.log(apiKey)
const apiSecret = process.env.SHOPIFY_API_SECRET;
const access_token = process.env.ACCESS_TOKEN;
const scopes = 'write_orders, read_customers';
const forwardingAddress = `https://8c7d6cca.ngrok.io`
const app = express();

var axios = require("axios");
var mongoose = require("mongoose");



const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MongoDb Connections
var db = require("./models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Meatstick";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//Shopify stuff
app.get('/', (req, res) => {
  res.send("It Works!")
});


//Install Function 
app.get('/shopify', (req, res) => {
  const shop = req.query.shop;
  if (shop) {
    const state = nonce();
    const redirectUri = forwardingAddress + '/shopify/callback';
    const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;

    res.cookie('state', state);
    res.redirect(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }
});


//callback function
app.get('/shopify/callback', (req, res) => {
  const { shop, hmac, code, state } = req.query;
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send('Request origin cannot be verified');
  }

  if (shop && hmac && code) {
    // DONE: Validate request is from Shopify
    const map = Object.assign({}, req.query);
    delete map['signature'];
    delete map['hmac'];
    const message = querystring.stringify(map);
    const providedHmac = Buffer.from(hmac, 'utf-8');
    const generatedHash = Buffer.from(
      crypto
        .createHmac('sha256', apiSecret)
        .update(message)
        .digest('hex'),
      'utf-8'
    );
    let hashEquals = false;

    try {
      hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
    } catch (e) {
      hashEquals = false;
    };

    if (!hashEquals) {
      return res.status(400).send('HMAC validation failed');
    }

    // DONE: Exchange temporary code for a permanent access token
    const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
    const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code,
    };

    request.post(accessTokenRequestUrl, { json: accessTokenPayload })
      .then((accessTokenResponse) => {
        const accessToken = accessTokenResponse.access_token;
        console.log(accessTokenResponse)
        // DONE: Use access token to make API call to 'shop' endpoint
        const shopRequestUrl = 'https://' + shop + '/admin/shop.json';
        const shopRequestHeaders = {
          'X-Shopify-Access-Token': accessToken,
        };

        request.get(shopRequestUrl, { headers: shopRequestHeaders })
          .then((shopResponse) => {
            res.status(200).end(shopResponse);
          })
          .catch((error) => {
            res.status(error.statusCode).send(error.error.error_description);
          });
      })
      .catch((error) => {
        res.status(error.statusCode).send(error.error.error_description);
      });

  } else {
    res.status(400).send('Required parameters missing');
  }
});



// database 


app.post('/review', (req, res) => {
  var userData = req.body;
  db.User.create(userData)
  console.log(userData)

    .then(function (userData) {
      console.log(userData)
    })
    .catch(function (err) {
      return res.json(err)
    })
}
)
// database pull
app.get("/review_card", (req, res) => {
  db.User.find()
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      console.log('error')
      res.json(err)

    })

})

// Email support page 
app.post("/mail", (req, res) => {

  var data = "<p> name:" + req.body.name + "</p> ";
  data += "<p> Email:" + req.body.Email + "</p> "
  data += "<p> Phone:" + req.body.phoneNumber + "</p> "
  data += "<p> Message:" + req.body.message + "</p> "



  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'themeatstickthermometer123@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: 'themeatstickthermometer123@gmail.com', // sender address
    to: 'jdeje002@gmail.com', // Add clients Email
    subject: 'MEAT STICK SUPPORT', // Subject line
    html: data // plain text body

  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
})




app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
