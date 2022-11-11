const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(product) {
        const product_id = uuidv4();
        product.product_id = product_id;
        const result = await connection("product").insert(product);
        return result;
    },
    async getById({ product_id, user_id }) {
        const result = await connection("product").where({ product_id, user_id }).select("*");
        return result;

    },
    async updateById({product_id, product}){
        const result = await connection("product").where(product_id).update(product);
        return result;
    },
    async deleteById(product_id){
        const result = await connection("product").where({product_id}).delete();
        return result;
    }
}
