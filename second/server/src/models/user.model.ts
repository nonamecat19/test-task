import {model, Model, Schema} from 'mongoose'
import {USER} from "../constants/models";
import {UserData} from "../types";
import bcrypt from 'bcrypt';
import validator from "validator";

const UserSchema: Schema<UserData> = new Schema({
    email: {
        type: String,
        unique: true,
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    name: {
        type: String,
        required: true,
        minlength: [4, "Name is too short"],
        validate(value: string) {
            if (value.length < 4) {
                throw new Error("Name is too short")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [4, "Password is too short"]
    }
})

UserSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

export const User: Model<UserData> = model(USER, UserSchema)