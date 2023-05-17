"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = require("./db/mongoose");
const user_route_1 = require("./routes/user.route");
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
(0, mongoose_1.connectToDB)();
const app = (0, express_1.default)();
const port = config_1.PORT || 5000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.json());
app.use('/user', (0, user_route_1.userRouter)());
app.listen(port, () => {
    console.log(`Server at ${port}`);
});
