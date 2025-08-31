const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});