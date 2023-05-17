import {Schema, model, Model} from 'mongoose'
import {USER} from "../constants/models";
import {UserData} from "../types";
import validator from 'validator';
import bcrypt from 'bcrypt';

const UserSchema: Schema<UserData> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true
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