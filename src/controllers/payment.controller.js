const paymentCtrl = {}

const PayMethod = require('../models/PaymentMethod')

const createPayment = async(req, res) => {
    const{nombre, sku, precio, stock, sucursal, status} = req.body 
    const newProduct = new Product({nombre, sku, precio, stock, sucursal, status});
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
};

const getPaymentById = async (req, res) => {
    const payment = await PayMethod.findById(req.params.paymentId);
    res.status(200).json(payment)
};

const updatePaymentById = async (req, res) => {
    const updatedPayment = await PayMethod.findByIdAndUpdate(req.params.paymentId, req.body,{
        new:true
    })
    res.status(200).json(updatedPayment)
};

const deletePaymentById = async (req, res) => {
    const deletedPayment = await PayMethod.findByIdAndDelete(req.params.paymentId)
    res.status(200).json()
};

module.exports = {createPayment, getPaymentById, updatePaymentById, deletePaymentById}