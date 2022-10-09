const productsCtrl = {}
const express = require('express');
const productos = require('../models/Product')
const json = require('body-parser');
const Product = require('../models/Product');


const createProduct = async(req, res) => {
    const{nombre, sku, precio, stock, sucursal, status} = req.body 
    const newProduct = new Product({nombre, sku, precio, stock, sucursal, status});
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
};

const getProducts = (req, res) => {
    res.json('get products')
};

const getProductsById = (req, res) => {
    sdfsdf
};

const updateProductsById = (req, res) => {
    sdfsdf
};

const deleteProductsById = (req, res) => {
    sdfsdf
};



module.exports = {createProduct, getProducts, createProduct, getProducts, getProductsById,
updateProductsById, deleteProductsById}
