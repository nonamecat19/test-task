import express, {Express, Request, Response} from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import {connectToDB} from './db/mongoose';
import {userRouter} from './routes/user.route';
import {PORT} from "./config";

config();
connectToDB();

const app: Express = express();
const port = PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/user', userRouter());

app.listen(port, () => {
    console.log(`Server at ${port}`)
})