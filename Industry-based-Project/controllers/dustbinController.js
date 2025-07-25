const Dustbin = require('../models/Dustbin');

//create
exports.createDustbin = async (req, res) => {
    const newdata = await Dustbin.create(req.body);
    res.status(201).json(newdata);
};

//view all data
exports.getAllDustbins = async (req, res) => {
    const alldata = await Dustbin.find();
    res.status(200).json(alldata);
}

//update
exports.updateDustbin = async (req, res) => {
    const updatedData = await Dustbin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedData);
};
//delete
exports.deleteDustbin = async (req, res) => {
    await Dustbin.findByIdAndDelete(req.params.id);
    res.status(204).json("message: deleted successfully");
};