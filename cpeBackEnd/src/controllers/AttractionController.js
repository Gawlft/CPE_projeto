const { response } = require("express");
const AttractionModel = require("../models/AttractionModel");


const attraction = [];

module.exports = {
    async create(request, response) {
        try {
            const newAttraction = request.body;

            const result = await AttractionModel.create(newAttraction);

            return response.status(200).json(result);

        } catch (err) {
            console.warn("Note creation failed:", err);

            return response.status(500).json({
                notification: "Internal server err while trying to create attraction"
            });
        }
    },


   async getById(request, response) {
        try {
            const {attraction_id} = request.params;
    
                const result = await AttractionModel.getById({attraction_id});
                
                if(result === 0){
                    return response.status(400).json({notification:"attraction_id not found"});
                }
    
                return response.status(200).json({
                    notification: "attraction GET operation successful",
                    data: result
                });
                    
        } catch (err) {
            console.warn("Getting attraction failed:", err);
            return response.status(500).json({notification:"internal server err trying to get attraction"});
        }
    },

    async getAll(response){
        try {    
                const result = await AttractionModel.getAll();
                
                if(result === 0){
                    return response.status(400).json({notification:"No attraction found"});
                }
    
                return response.status(200).json({
                    notification: "attraction GET operation successful",
                    data: result
                });
                    
        } catch (err) {
            console.warn("Getting attraction failed:", err);
            return response.status(500).json({notification:"internal server err trying to get attraction"});
        }
    },


    async update(request, response){
        try {
            const {attraction_id} = request.params;
            const newAttraction = request.body;
            const result = await AttractionModel.updateById(attraction_id, newAttraction);
            return response.status(200).json({notification: "attraction updated successfully", result});
        } catch (err) {
            console.warn("attraction update failed:", err);
            return response.status(500).json({notification:"internal server err trying to update attraction"});
        }
    },
    async delete(request, response){
        try {
            const {attraction_id} = request.params;
            const result = await AttractionModel.delete(attraction_id);

            if(result === 0){
                return response.status(400).json({notification:"attraction_id not found"});
            } return response.status(200).json({notification: "attraction deleted successfully"});
        } catch (err) {
            console.warn("attraction delete failed:", err);
            return response.status(500).json({notification:"internal server err trying to delete attraction"});
        }
    },
};
