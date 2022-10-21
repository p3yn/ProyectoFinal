const salesCtrl = {}
const Sale = require ('../models/Sales')

const createSales = async (req, res) => {
    const{producto, total, sucursal, user, metodoDePago} = req.body 
    const newSale = new Sale({producto, total, sucursal, user, metodoDePago});
    const saleSaved = await newSale.save()
    res.status(201).json(saleSaved)
}

const getSaleById = async (req, res) => {
    const sale = await Sales.findById(req.params.salesId);
    res.status(200).json(sale)
}

const updateSaleById = async (req, res) => {
    const updatedSale = await Sales.findByIdAndUpdate(req.params.salesId, req.body,{
        new:true
    })
    res.status(200).json(updatedSale)
}

const deleteSaleById = async (req, res) => {
    const deletedSale = await Sales.findByIdAndDelete(req.params.salesId)
    res.status(200).json()
}

module.exports = {createSales, getSaleById, updateSaleById,
    deleteSaleById}