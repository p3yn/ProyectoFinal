const branchCtrl = {}

const Branch = require('../models/Branch');

const createBranch = async(req, res) => {
    const{ status, nombre, codigo, telefono, direccion, ubicacion } = req.body 
    const newBranch = new Branch({status, nombre, codigo, telefono, direccion, ubicacion});
    const branchSaved = await newBranch.save()
    res.status(201).json(branchSaved)
}

const getBranches = async (req, res) => {
    const branches = await Branch.find();
    res.json(branches)
};

const getBranchesById = async (req, res) => {
    const branch = await Branch.findById(req.params.branchId);
    res.status(200).json(branch)
};

const updateBranchById = async (req, res) => {
    const updatedBranch = await Branch.findByIdAndUpdate(req.params.branchId, req.body,{
        new:true
    })
    res.status(200).json(updatedBranch)
};

const deleteBranchById = async (req, res) => {
    const deletedBranch = await Branch.findByIdAndDelete(req.params.branchId)
    res.status(200).json()
};


module.exports = {createBranch, getBranches, getBranchesById, updateBranchById, deleteBranchById  }