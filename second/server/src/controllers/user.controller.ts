
import {addUser} from '../services/user.services'
import {NextFunction, Request, Response} from "express";
import {UserData} from "../types";
import {User} from "../models/user.model";

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        const data: UserData = req.body

        console.log({
            body: data
        })

        if (!data.name || !data.email || !data.password) {
            throw new Error('Incorrect data')
        }

        const user = new User(data)

        const usersWithSameEmail = await User.findOne({email: user.email})
        if (usersWithSameEmail) {
            throw new Error('User with same email already registered!')
        }

        const response = await addUser(user)

        res
            .status(200)
            .json(response)

    } catch (error: any) {
        res
            .status(400)
            .json({
                isError: true,
                data: null,
                errorMessage: error.message,
            })
    }
}