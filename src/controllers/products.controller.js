const productsCtrl = {}
//const express = require('express');
//const json = require('body-parser');
const Product = require('../models/Product');



const createProduct = async(req, res) => {
    const{nombre, sku, precio, stock, sucursal, status} = req.body 
    const newProduct = new Product({nombre, sku, precio, stock, sucursal, status});
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
};

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
};

const getProductsById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
};

const updateProductsById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{
        new:true
    })
    res.status(200).json(updatedProduct)
};

const deleteProductsById = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
};



module.exports = {createProduct, getProducts, getProductsById,
updateProductsById, deleteProductsById}
