const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const key1 = "sk_test_51MvqNCBPj4lU7hQg4OI2umSNdSMLQD72JIpHdxOK1z";
const key2 = "n0e6h1Vd8Gveo9wL43g60bmrlV6jgFsbMsBsvHoIMIW04l00rirVevYg";
const stripe = require("stripe")(key1 + key2);

// API setup

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total; // Cost in subunits (cents)
  console.log("Payment request received 🌝 for: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "bbd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/clone-dbc67/us-central1/api
