const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
//const UserValidator = require("./validators/UserValidator");

const ProductController = require("./controllers/ProductController");
//const ProductValidator = require("./validators/ProductValidator");

const AttractionController = require("./controllers/AttractionController");
//const AttractionValidator = require("./validators/AttractionValidator");

const FavProdController = require("./controllers/FavProdController");
//const FavProdController = require("./validators/FavProdValidator");

const FavAttController = require("./controllers/FavAttController");
//const FavAttController = require("./validators/FavAttValidator");

const SessionController = require("./controllers/SessionController");
//const auth = require("./middlewares/authentication")

routes.post("/login", SessionController.signIn);

routes.get("/user/:user_id", UserValidator.getById, UserController.getById);
routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);

routes.get("/product/:product_id", productValidator.getById, productController.getById);
routes.post("/product", productValidator.create, productController.create);
routes.put("/product/:product_id", productValidator.update, productController.update);
routes.delete("/product/:product_id", productValidator.delete, productController.delete);

routes.get("/attraction/:attraction_id", attractionValidator.getById, attractionController.getById);
routes.post("/attraction", attractionValidator.create, attractionController.create);
routes.put("/attraction/:attraction_id", attractionValidator.update, attractionController.update);
routes.delete("/attraction/:attraction_id", attractionValidator.delete, attractionController.delete);

routes.get("/favoriteProduct/:user_id", FavProdValidator.getById, auth.authenticateToken, FavProdController.getById);
routes.post("/favoriteProduct", FavProdValidator.create,  auth.authenticateToken, FavProdController.create);
routes.delete("/favoriteProduct/:favorite_id", FavProdValidator.delete ,FavProdController.delete);


routes.get("/favorito/:user_id", FavProdValidator.getById, auth.authenticateToken, FavProdController.getById);
routes.post("/favorito", FavProdValidator.create,  auth.authenticateToken, FavProdController.create);
routes.delete("/favorito/:favorito_id", FavProdValidator.delete ,FavProdController.delete);





module.exports = routes;