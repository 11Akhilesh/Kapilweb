// /backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/clothes', require('./routes/clothes.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
