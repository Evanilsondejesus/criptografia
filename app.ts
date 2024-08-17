
import express from 'express';
import routes from './src/controllers';
//import cors from 'cors';

//const express = require('express');
//const cors = require('cors');
//const routes = require('./src/controllers')

const app = express();
const port = 8080;
 
  

//app.use(cors());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

});