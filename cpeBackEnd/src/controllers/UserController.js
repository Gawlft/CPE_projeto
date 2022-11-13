const { response } = require("express");
const { FirebaseError } = require("firebase/app");
const UserModel = require("../models/UserModel");
const firebase = require ("../utils/Firebase")



module.exports = {
    async create(request, response){
        try{
            const newUser = request.body;
           
            const uid = await Firebase.createNewUser(user.email, user.password);



            const result = await UserModel.create(newUser);
            return response.status(200).json(result)
        } catch (err) {
          console.log ("User creation failed: "+ err);
          return response.status(500).json({
            notification: "Internal server error while trying to create User"
          });
        }
    },
    async getById(request, response) {
        try{
            const {user_id} = request.params;
            const result = await UserModel.getById(user_id);

            return response.status(200).json(result);
        }catch(err){
          console.log("User getById failed: " + err);
          return response.status(500).json({
            notification: "Internal server error while trying to get User"
          });
        }
    },
    async uptade(request, response){
        try{
            const {user_id} = request.params;
            const newUser = request.body;
            const result = await UserModel.updateById(user_id, newUser)

            return response.status(200).json(result);
        }catch (err){
            console.log("User uptade failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },
    async delete(request, response){
        try{
            const {user_id} = request.params;

            const result = await UserModel.deleteById(user_id);
            return response.status(200).json(result);
        }catch(err){
            console.log("User delete failed: " + err);
            return response.status(500).json({
                notification:  "Internal server error while trying to delete User",
            });
        }
    },
        
};