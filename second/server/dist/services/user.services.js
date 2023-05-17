"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const addUser = async (data) => {
    try {
        await data.save();
        return {
            isError: false,
            data: null,
            errorMessage: ''
        };
    }
    catch (error) {
        if (error.message.includes('E11000')) {
            throw new Error("This email already registered");
        }
        throw new Error(error.message);
    }
};
exports.addUser = addUser;
