const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

// Middleware configuration
app.use(express.json());

// Route
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send('Hello, Express! This is Kaleeswaran');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// MongoDB Connection
mongoose.connect("mongodb+srv://kalees:Password%402024@crud.y0g05.mongodb.net/?retryWrites=true&w=majority&appName=CRUD")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection Failed", err);
  });
