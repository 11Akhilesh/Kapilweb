// /backend/models/Clothes.js
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  name: String,
  category: String, // shirt, pants, suit, etc.
  size: [String], // e.g., ["S", "M", "L", "XL"]
  price: Number,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model('Clothes', clothesSchema);
