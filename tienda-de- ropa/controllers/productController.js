const Product = require('../models/Product');

exports.showProducts = async (req, res) => {
    const products = await Product.find();
    res.send(`<h1>Productos</h1>${getProductCards(products)}`);
};

exports.showProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(`<h1>Detalle Producto</h1>${product ? getProductCard(product) : 'Producto no encontrado'}`);
};

exports.showNewProduct = (req, res) => {
    res.send('<h1>Nuevo Producto</h1><form action="/products" method="POST"><input type="text" name="nombre"><button type="submit">Crear</button></form>');
};

exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
};

exports.showEditProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(`<h1>Editar Producto</h1><form action="/products/${product._id}" method="POST"><input type="text" name="nombre" value="${product.nombre}"><button type="submit">Actualizar</button></form>`);
    } else {
        res.send('Producto no encontrado');
    }
};

exports.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
};

function getProductCard(product) {
    return `<div class="product-card"><img src="${product.imagen}" alt="${product.nombre}"><p>${product.descripcion}</p><p>Precio: $${product.precio}</p><a href="/products/${product._id}">Ver detalle</a></div>`;
}

function getProductCards(products) {
    return products.map(getProductCard).join('');
}