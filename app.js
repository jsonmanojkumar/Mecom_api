const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes start
const usersRoutes = require('./routes/users_routes');
const categoriesRoutes = require('./routes/categories_routes');
const subCategoriesRoutes = require('./routes/subCategories_routes');
const sliderRoutes = require('./routes/slider_routes');
const addressRoutes = require('./routes/address_routes');
const cartRoutes = require('./routes/cart_routes');
const productRoutes = require('./routes/products_routes');
const searchHistoryRoutes = require('./routes/searchHistory_routes');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(cors("*"));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);
app.use('/subCategories', subCategoriesRoutes);
app.use('/slider', sliderRoutes);
app.use('/address', addressRoutes);
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/searchHistory', searchHistoryRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
