const { response } = require("express");
const { Firebaseerr } = require("firebase/app");
const UserModel = require("../models/UserModel");
const Firebase = require ("../utils/Firebase")

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;
            const uid = await Firebase.createNewUser(newUser.email, newUser.password);
            delete newUser.password;
            newUser.firebase_id = uid;
            const result = await UserModel.create(newUser);
            return response.status(200).json(result);
        } catch (err) {
            console.warn("Note creation failed:", err);
            return response.status(500).json({
                notification: "Internal server err while trying to create User"
            });
        }
    },
   async getById(request, response) {
        try {
            const {user_id} = request.params;
                const result = await UserModel.getById({user_id});
                if(result === 0){
                    return response.status(400).json({notification:"User_id not found"});
                }return response.status(200).json({
                    notification: "User GET operation successful",
                    data: result
                });
        } catch (err) {
            console.warn("Getting User failed:", err);
            return response.status(500).json({notification:"internal server err trying to get User"});
        }
    },

    async getByEmail(request, response) {
        try {
            const {email} = request.params;
                const result = await UserModel.getByEmail({email});
                if(result === 0){
                    return response.status(400).json({notification:"User_email not found"});
                }return response.status(200).json({
                    notification: "User GET operation successful",
                    data: result
                });
        } catch (err) {
            console.warn("Getting User failed:", err);
            return response.status(500).json({notification:"internal server err trying to get User"});
        }
    },
    async getAll(request, response) {
        try {    
            const result = await UserModel.getAll();
            
            if(result === 0){
                return response.status(400).json({notification:"No user found"});
            }

            return response.status(200).json({
                notification: "product GET operation successful",
                data: result
            });
                
    } catch (err) {
        console.warn("Getting product failed:", err);
        return response.status(500).json({notification:"internal server err trying to get product"});
    }
},
    async update(request, response){
        try {
            const {user_id} = request.params;
            const newUser = request.body;
            const result = await UserModel.updateById(user_id, newUser);
            return response.status(200).json({notification: "User updated successfully"});
        } catch (err) {
            console.warn("User update failed:", err);
            return response.status(500).json({notification:"internal server err trying to update User"});
        }
    },
    async delete(request, response){
        try {
            const {user_id} = request.params;
            const result = await UserModel.delete(user_id);

            if(result === 0){
                return response.status(400).json({notification:"user_id not found"});
            }return response.status(200).json({notification: "User deleted successfully"});
        } catch (err) {
            console.warn("User delete failed:", err);
            return response.status(500).json({notification:"internal server err trying to delete User"});
        }
    },
};