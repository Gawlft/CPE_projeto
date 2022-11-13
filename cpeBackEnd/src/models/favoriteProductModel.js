const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(favoriteProd) {
        const favoriteProd_id = uuidv4();
        favoriteProd.favoriteProd_id = favoriteProd_id;
        const result = await connection("favoriteProduct").insert(favoriteProd);
        return result;
    },
    async getById({ favoriteProduct_id, user_id }) {
        const result = await connection("favoriteProduct").where({ favoriteProduct_id, user_id }).select("*").first();
        return result;

    },
    async getByUserWithFilters(user_id){
        const result = await connection("favoriteProduct")
            .innerJoin("product", "product.product_id", "favoriteProduct.product_id")
            .where({"favoriteProdudct.user_id":user_id})
            .select("product.name", "product.description");
            return result;
    },
    async deleteById(favoriteProd_id){
        const result = await connection("favoriteProduct").where({favoriteProd_id}).delete();
        return result;
    }
}
