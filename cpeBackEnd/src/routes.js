const express = require("express");
const routes = express.Router();
const auth = require("./middlewares/authentication");

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const ProductController = require("./controllers/ProductController");
const ProductValidator = require("./validators/ProductValidator");

const AttractionController = require("./controllers/AttractionController");
const AttractionValidator = require("./validators/AttractionValidator");

const FavProdController = require("./controllers/FavProdController");
const FavProdValidator = require("./validators/FavProdValidator");

const FavAttController = require("./controllers/FavAttController");
const FavAttValidator = require("./validators/FavAttValidator");

const SessionController = require("./controllers/SessionController");

routes.post("/login", SessionController.signIn);

routes.get("/user/:user_id", UserValidator.getById, UserController.getById);
routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);

routes.get("/product/:product_id", ProductValidator.getById, ProductController.getById);
routes.get("/attraction/", AttractionValidator.getAll,auth.authenticateToken,AttractionController.getAll);
routes.post("/product", ProductValidator.create, ProductController.create);
routes.put("/product/:product_id", ProductValidator.update, ProductController.update);
routes.delete("/product/:product_id", ProductValidator.delete, ProductController.delete);

routes.get("/attraction/:attraction_id", AttractionValidator.getById, AttractionController.getById);
routes.get("/attraction/", AttractionValidator.getAll,auth.authenticateToken,AttractionController.getAll);
routes.post("/attraction", AttractionValidator.create, AttractionController.create);
routes.put("/attraction/:attraction_id", AttractionValidator.update, AttractionController.update);
routes.delete("/attraction/:attraction_id", AttractionValidator.delete, AttractionController.delete);

routes.get("/favoriteProd/:user_id", FavProdValidator.getById, auth.authenticateToken, FavProdController.getById);
routes.post("/favoriteProd", FavProdValidator.create,  auth.authenticateToken, FavProdController.create);
routes.delete("/favoriteProd/:favorite_id", FavProdValidator.delete ,FavProdController.delete);


routes.get("/favoriteAtt/:user_id", FavAttValidator.getById, auth.authenticateToken, FavAttController.getById);
routes.post("/favoriteAtt", FavAttValidator.create,  auth.authenticateToken, FavAttController.create);
routes.delete("/favoriteAtt/:favoriteAtt_id", FavAttValidator.delete ,FavAttController.delete);

module.exports = routes;