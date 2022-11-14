const FavProd = require("../models/favoriteProductModel");

module.exports = {
    async create(request, response) {
        try {
            const newFavProd = request.body;

            const result = await FavProd.create(newFavProd);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("FavProd creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create FavProd"
            });
        }
    },


   async getById(request, response) {
        try {
            const {user_id} = request.params;
            const result = await FavProd.getByUserWithFilters( user_id , {});
                
                if(result === 0){
                    return response.status(400).json(result);
                }
    
                return response.status(200).json({
                    notification: "FavProd GET operation successful",
                    data: result
                });
                    
        } catch (error) {
            console.warn("Getting FavProd failed:", error);
            return response.status(500).json({notification:"internal server error trying to get FavProd"});
        }
    },

    async delete(request, response){
        try {
            const {FavProd_id} = request.params;
            const result = await FavProd.delete(FavProd_id);

            if(result === 0){
                return response.status(400).json({notification:"user_id not found"});
            }

            return response.status(200).json({notification: "FavProd deleted successfully"});
        } catch (error) {
            console.warn("FavProd delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete FavProd"});
        }
    },
};