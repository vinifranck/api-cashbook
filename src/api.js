
var express= require('express');
var app=express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
 /** ---------ROTAS------*/
const router=express.Router();

const route=require("./routers/route");

app.use('/', route);

module.exports=app;
