import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import ProjectRoutes from './routes/project.routes.js';
import cors from 'cors';
connect();
const app = express();

app.use(cors()); //remember change as said @1:23:34
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/users',userRoutes);
app.use('/project',ProjectRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;