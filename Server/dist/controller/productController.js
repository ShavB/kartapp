"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getAllProducts = void 0;
const getAllProducts = (req, res) => {
    res.json("all the products stay here");
};
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.send(id);
};
exports.getProduct = getProduct;
