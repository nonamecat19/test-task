import {Router} from "express";
import {registerUser} from "../controllers/user.controller";

export const userRouter = (): Router => {
    const router = Router();

    router.post('/register', registerUser);

    return router;
}