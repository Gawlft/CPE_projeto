const { response } = require("express");
const ProductModel = require("../models/ProductModel");


const products = [];

module.exports = {
    async create(request, response){
        try{
            const product = request.body;

            const result = await ProductModel.create(product);
            return response.status(200).json(result)
        } catch (err) {
          console.log ("Product creation failed: "+ err);
          return response.status(500).json({
            notification: "Internal server error while trying to create Product"
          });
        }
    },
    async getById(request, response) {
        try{
            const {product_id} = request.params;
            const result = await Product.getById(product_id);

            return response.status(200).json(result);
        }catch(err){
          console.log("Product getById failed: " + err);
          return response.status(500).json({
            notification: "Internal server error while trying to get Product"
          });
        }
    },
    async uptade(request, respose){
        try{
            const {product_id} = request.params;
            const product = request.body;
            const result = await ProductModel.updateById(product_id, product)

            return response.status(200).json(result);
        }catch (err){
            console.log(" Product uptade failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to update Product",
            });
        }
    },
    async delete(request, respose){
        try{
            const {user_id} = request.params;

            const result =await ProductModel.deleteById(product_id);
            return response.status(200).json(result);
        }catch(err){
            console.log("Product delete failed: " + err);
            return response.status(500).json({
                notification:  "Internal server error while trying to delete Product",
            });
        }
    },
        
};
