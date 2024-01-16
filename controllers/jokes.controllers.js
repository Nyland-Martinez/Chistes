const Broma = require("../models/jokes.model");

module.exports.getBromas = async (req, res) => { 
    try {
        const Bromas = await Broma.find();
        res.status(200);
        res.json(Bromas);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.getBromaById = async (req, res) => { 
    try {
        const foundBroma = await Broma.findById(req.params.id);
        res.status(200);
        res.json(foundBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.getBromaRandom = async (req, res) => {
    try {
        const Bromas = await Broma.find();
        const ranValue = Math.round(Math.random()* (Bromas.length - 1));
        const ranBroma = Bromas[ranValue];
        res.status(200);
        res.json(ranBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.createBroma = async (req, res) => {
    try {
        const newBroma = await Broma.create(req.body);
        res.status(200);
        res.json(newBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.updateBroma = async (req, res) => {
    try {
        const updateBroma = await Broma.findAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updateBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.deleteBroma = async (req, res) => {
    try {
        const deleteBroma = await Broma.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deleteBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};