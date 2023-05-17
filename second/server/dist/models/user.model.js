"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../constants/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    name: {
        type: String,
        required: true,
        minlength: [4, "Name is too short"],
        validate(value) {
            if (value.length < 4) {
                throw new Error("Name is too short");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [4, "Password is too short"]
    }
});
UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt_1.default.hash(user.password, 8);
    }
    next();
});
exports.User = (0, mongoose_1.model)(models_1.USER, UserSchema);
