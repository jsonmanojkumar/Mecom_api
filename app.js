const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// const multer = require('multer');
// const path = require('path');

// Routes start
const usersRoutes = require('./routes/users_routes');
const categoriesRoutes = require('./routes/categories_routes');
const subCategoriesRoutes = require('./routes/subCategories_routes');
const sliderRoutes = require('./routes/slider_routes');
const addressRoutes = require('./routes/address_routes');
const cartRoutes = require('./routes/cart_routes');
const productRoutes = require('./routes/products_routes');
const searchHistoryRoutes = require('./routes/searchHistory_routes');
const couponsRoutes = require('./routes/coupons_routes');
const wishListRoutes = require('./routes/wishList_routes');


const app = express();
const PORT = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(cors("*"));



 
// // Set storage engine
// const storage = multer.diskStorage({
//   //  sliders / products / profile / category / subCategory /
//   destination: './uploads/slider', 
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialize upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // 1MB file size limit
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).array('images', 10); // Accept up to 10 images

// // Check file type
// function checkFileType(file, cb) {
//   // Allowed file extensions
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check extension
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime type
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

// // Upload endpoint
// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       if (req.files == undefined) {
//         res.status(400).send('No file selected');
//       } else {
//         res.status(200).send(`Files uploaded successfully: ${req.files.map(file => file.filename).join(', ')}`);
//       }
//     }
//   });
// });







// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database is Connected'))
  .catch(err => console.error('Database connection error:', err));




// Routes
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);
app.use('/subCategories', subCategoriesRoutes);
app.use('/slider', sliderRoutes);
app.use('/address', addressRoutes);
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/searchHistory', searchHistoryRoutes);
app.use('/coupons', couponsRoutes);
app.use('/wishList', wishListRoutes);

// app.use('/', uploadRouter);













app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
