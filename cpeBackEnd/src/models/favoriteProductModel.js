const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");

module.exports = {
  async create(favoriteProd) {
    const favoriteProd_id = uuidv4();
    favoriteProd.favoriteProd_id = favoriteProd_id;
    const result = await connection("favoriteProd").insert(favoriteProd);
    return result;
  },
  async getById({ favoriteProduct_id, user_id }) {
    const result = await connection("favoriteProd")
      .where({ favoriteProduct_id, user_id })
      .select("*")
      .first();
    return result;
  },
  async getByUserWithFilters(user_id) {
    const result = await connection("favoriteProd")
      .innerJoin("product", "product.product_id", "favoriteProd.product_id")
      .where({ "favoriteProd.user_id": user_id })
      .select("product.name", "product.description");
    return result;
  },
  async deleteById(favoriteProd_id) {
    const result = await connection("favoriteProd")
      .where({ favoriteProd_id })
      .delete();
    return result;
  },
};
