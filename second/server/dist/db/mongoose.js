"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const config_1 = require("../config");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const uri = config_1.MONGO_URL;
const connectToDB = () => {
    mongoose_1.default.connect(uri)
        .then(() => {
        console.log('Database ready!');
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.connectToDB = connectToDB;
