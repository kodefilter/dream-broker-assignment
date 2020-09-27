import express, { response } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import analyzeRouter from './routes/analyze';
import apiErrorHandler from './middlewares/apiErrorHandler'
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/analyze', analyzeRouter);

//Custom middleware
app.use(apiErrorHandler)


export default app;