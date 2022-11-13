const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(favoriteProd) {
        const favoriteProd_id = uuidv4();
        favoriteProd.favoriteProd_id = favoriteProd_id;
        const result = await connection("favoriteProd").insert(favoriteProd);
        return result;
    },
    async getById({ favoriteProd_id, user_id }) {
        const result = await connection("favoriteProd").where({ favoriteProd_id, user_id }).select("*");
        return result;

    },
    async updateById({favoriteProd_id, favoriteProd}){
        const result = await connection("favoriteProd").where(favoriteProd_id_id).update(favoriteProd);
        return result;
    },
    async deleteById(favoriteProd_id){
        const result = await connection("favoriteProd").where({favoriteProd_id}).delete();
        return result;
    }
}
