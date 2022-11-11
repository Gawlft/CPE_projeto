const connection = require(".../database/connection");

module.exports = {
    async create(user){
        const result = await connection("user").insert(user);
        return result;
    },
    async getById({user_id}){
        const result = await connection("user").where({user_id})

    }
}
