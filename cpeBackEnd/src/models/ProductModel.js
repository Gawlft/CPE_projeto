const {v4 : uuidv4} = require ('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(product) {
        const product_id = uuidv4();

        product.product_id = product_id;
        await connection("product").insert(product);
        return product_id;
    },

    async getById({product_id}){
        const result = await connection("product")
            .where({product_id})
            .select("*");
        return result;
    },

    async getAll(){
        const result = await connection("product")
        .select("*");
        return result;

    },

    async updateById(product_id, product){
        const result = await connection("product")
            .where(product_id)
            .update(product);
        return result;
    },

   async delete(product_id){
        const result = await connection("product").where({product_id}).delete();
        return result;
    },
};
