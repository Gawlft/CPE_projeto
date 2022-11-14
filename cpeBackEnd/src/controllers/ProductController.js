const { response } = require("express");
const ProductModel = require("../models/ProductModel");

module.exports = {
    async create(request, response) {
        try {
            const newProduct = request.body;

            const result = await ProductModel.create(newProduct);

            return response.status(200).json(result);

        } catch (err) {
            console.warn("Note creation failed:", err);

            return response.status(500).json({
                notification: "Internal server err while trying to create product"
            });
        }
    },


   async getById(request, response) {
        try {
            const {product_id} = request.params;
    
                const result = await ProductModel.getById({product_id});
                
                if(result === 0){
                    return response.status(400).json({notification:"product_id not found"});
                }
    
                return response.status(200).json({
                    notification: "product GET operation successful",
                    data: result
                });
                    
        } catch (err) {
            console.warn("Getting product failed:", err);
            return response.status(500).json({notification:"internal server err trying to get product"});
        }
    },


    async update(request, response){
        try {
            const {product_id} = request.params;
            const newproduct = request.body;
            const result = await ProductModel.updateById(product_id, newproduct);
            return response.status(200).json({notification: "product updated successfully"});
        } catch (err) {
            console.warn("product update failed:", err);
            return response.status(500).json({notification:"internal server err trying to update product"});
        }
    },
    async delete(request, response){
        try {
            const {product_id} = request.params;
            const result = await ProductModel.delete(product_id);

            if(result === 0){
                return response.status(400).json({notification:"product_id not found"});
            } return response.status(200).json({notification: "product deleted successfully"});
        } catch (err) {
            console.warn("product delete failed:", err);
            return response.status(500).json({notification:"internal server err trying to delete product"});
        }
    },
};
