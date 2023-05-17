"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_services_1 = require("../services/user.services");
const user_model_1 = require("../models/user.model");
const registerUser = async (req, res, next) => {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.password) {
            throw new Error('Incorrect data');
        }
        const user = new user_model_1.User(data);
        const response = await (0, user_services_1.addUser)(user);
        console.log(user);
        console.log(response);
        res
            .status(200)
            .json(response);
    }
    catch (error) {
        res
            .status(400)
            .json({
            isError: true,
            data: null,
            errorMessage: error.message
        });
    }
};
exports.registerUser = registerUser;
