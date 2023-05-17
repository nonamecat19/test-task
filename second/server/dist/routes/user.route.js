"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = () => {
    const router = (0, express_1.Router)();
    router.post('/register', user_controller_1.registerUser);
    return router;
};
exports.userRouter = userRouter;
