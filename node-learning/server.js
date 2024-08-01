const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`);
});

app.use('/', productRoutes);
