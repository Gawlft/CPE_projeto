const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(attraction) {
        const attraction_id = uuidv4();
        attraction.attraction_id = attraction_id;
        const result = await connection("attraction").insert(attraction);
        return result;
    },
    async getById({ attraction_id, user_id }) {
        const result = await connection("attraction").where({ attraction_id, user_id }).select("*");
        return result;

    },
    async updateById({attraction_id, attraction}){
        const result = await connection("attraction").where(attraction_id).update(attraction);
        return result;
    },
    async deleteById(attraction_id){
        const result = await connection("attraction").where({attraction_id}).delete();
        return result;
    }
}
