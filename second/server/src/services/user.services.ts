import {ResponseType, UserData} from "../types";
import {User} from "../models/user.model";
import {Document} from "mongoose";

export const addUser = async (data: Document): Promise<ResponseType> => {
    try {

        await data.save()

        return {
            isError: false,
            data: null,
            errorMessage: ''
        }
    } catch (error: any) {
        if (error.message.includes('E11000')) {
            throw new Error("This email already registered")
        }
        throw new Error(error.message)
    }
}