// /backend/routes/clothes.js
const express = require('express');
const router = express.Router();
const Clothes = require('../models/Clothes');

// Get all clothes
router.get('/', async (req, res) => {
  const clothes = await Clothes.find();
  res.json(clothes);
});

// Add a new item
router.post('/', async (req, res) => {
  const newClothes = new Clothes(req.body);
  await newClothes.save();
  res.json(newClothes);
});

// Update item
router.put('/:id', async (req, res) => {
  const updatedClothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedClothes);
});

// Delete item
router.delete('/:id', async (req, res) => {
  await Clothes.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
