const FavAtt = require("../models/favoriteAttModel");

module.exports = {
    async create(request, response) {
        try {
            const newFavAtt = request.body;

            const result = await FavAtt.create(newFavAtt);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("FavAtt creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create FavAtt"
            });
        }
    },


   async getById(request, response) {
        try {
            const {user_id} = request.params;
            const result = await FavAtt.getByUserWithFilters( user_id , {});
                
                if(result === 0){
                    return response.status(400).json(result);
                }
    
                return response.status(200).json({
                    notification: "FavAtt GET operation successful",
                    data: result
                });
                    
        } catch (error) {
            console.warn("Getting FavAtt failed:", error);
            return response.status(500).json({notification:"internal server error trying to get FavAtt"});
        }
    },

    async delete(request, response){
        try {
            const {FavAtt_id} = request.params;
            const result = await FavAtt.delete(FavAtt_id);

            if(result === 0){
                return response.status(400).json({notification:"user_id not found"});
            }

            return response.status(200).json({notification: "FavAtt deleted successfully"});
        } catch (error) {
            console.warn("FavAtt delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete FavAtt"});
        }
    },
};