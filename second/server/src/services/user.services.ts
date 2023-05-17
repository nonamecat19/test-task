import {ResponseType, UserData} from "../types";
import {User} from "../models/user.model";
import {Document} from "mongoose";

export const addUser = async (data: Document): Promise<ResponseType> => {
    try {

        // await data.save()

        return {
            isError: false,
            data: null,
            errorMessage: ''
        }
    } catch (error: any) {
        throw new Error('Server error')
    }
}