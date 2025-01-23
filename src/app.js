const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);
app.use('/items', itemRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
