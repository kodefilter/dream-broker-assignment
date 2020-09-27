import express, { response } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import analyzeRouter from './routes/analyze';
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType';
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
//Custom middleware
app.use(apiContentType)


app.use('/', indexRouter);
app.use('/analyze', analyzeRouter);

//Custom middleware
app.use(apiErrorHandler)


export default app;