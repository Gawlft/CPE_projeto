const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(favoriteAtt) {
        const favoriteAtt_id = uuidv4();
        favoriteAtt.favoriteAtt_id = favoriteAtt_id;
        const result = await connection("favoriteAtt").insert(favoriteAtt);
        return result;
    },
    async getById({ favoriteAtt_id, user_id }) {
        const result = await connection("favoriteAtt").where({ favoriteAtt_id, user_id }).select("*");
        return result;

    },
    async updateById({favoriteAtt_id, favoriteAtt}){
        const result = await connection("favoriteAtt").where(favoriteAtt_id).update(favoriteAtt);
        return result;
    },
    async deleteById(favoriteAtt_id){
        const result = await connection("favoriteAttProd").where({favoriteAtt_id}).delete();
        return result;
    }
}
