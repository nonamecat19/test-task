"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const addUser = async (data) => {
    try {
        // await data.save()
        return {
            isError: false,
            data: null,
            errorMessage: ''
        };
    }
    catch (error) {
        throw new Error('Server error');
    }
};
exports.addUser = addUser;
