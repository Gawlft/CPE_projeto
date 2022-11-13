const { response } = require("express");
const AttractionModel = require("../models/AttractionModel");


const attractions = [];

module.exports = {
    async create(request, response){
        try{
            const attraction = request.body;

            const result = await AttractionModel.create(attraction);
            return response.status(200).json(result)
        } catch (err) {
          console.log ("Attraction creation failed: "+ err);
          return response.status(500).json({
            notification: "Internal server error while trying to create Attraction"
          });
        }
    },
    async getById(request, response) {
        try{
            const {attraction_id} = request.params;
            const result = await Attraction.getById(attraction_id);

            return response.status(200).json(result);
        }catch(err){
          console.log("Attraction getById failed: " + err);
          return response.status(500).json({
            notification: "Internal server error while trying to get Attraction"
          });
        }
    },
    async uptade(request, respose){
        try{
            const {attraction_id} = request.params;
            const attraction = request.body;
            const result = await AttractionModel.updateById(attraction_id, attraction)

            return response.status(200).json(result);
        }catch (err){
            console.log("Attraction uptade failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to update Attraction",
            });
        }
    },
    async delete(request, respose){
        try{
            const {attraction_id} = request.params;

            const result =await AttractionModel.deleteById(attraction_id);
            return response.status(200).json(result);
        }catch(err){
            console.log("Attraction delete failed: " + err);
            return response.status(500).json({
                notification:  "Internal server error while trying to delete Attraction",
            });
        }
    },
        
};
