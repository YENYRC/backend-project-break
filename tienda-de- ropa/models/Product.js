const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    imagen: String,
    categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
    talla: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL'] },
    precio: Number
});

module.exports = mongoose.model('Product', productSchema);