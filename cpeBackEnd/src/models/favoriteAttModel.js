const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(favoriteAtt) {
        const favoriteAtt_id = uuidv4();
        favoriteAtt.favoriteProd_id = favoriteAtt_id;
        const result = await connection("favoriteAtt").insert(favoriteAtt);
        return result;
    },
    async getById({ favoriteAtt_id, user_id }) {
        const result = await connection("favoriteAtt").where({ favoriteAtt_id, user_id }).select("*").first();
        return result;

    },
    async getByUserWithFilters(user_id){
        const result = await connection("favoriteAtt")
            .innerJoin("attraction", "attraction.attraction_id", "favoriteAtt.attraction_id")
            .where({"favoriteProdudct.user_id":user_id})
            .select("attraction.name", "attraction.description");
            return result;
    },
    async deleteById(favoriteProd_id){
        const result = await connection("favoriteAtt").where({favoritefavoriteAtt_id}).delete();
        return result;
    }
}
