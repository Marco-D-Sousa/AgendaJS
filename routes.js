const express = require('express');
const route = express.Router();

const homeControl = require('./src/controllers/homeControl');
const loginControl = require('./src/controllers/loginControl');
const contatoControl = require('./src/controllers/contatoControl');

const { loginRequired } = require('./src/middlewares/middleware');

//Rotas de Home
route.get('/', homeControl.index);

//Rotas de Login
route.get('/login/index', loginControl.index);
route.post('/login/register', loginControl.register);
route.post('/login/login', loginControl.login);
route.get('/login/logout', loginControl.logout);

//Rotas de Contato
route.get('/contato/index', loginRequired, contatoControl.index);
route.post('/contato/register', loginRequired, contatoControl.register);
route.get('/contato/index/:id', loginRequired, contatoControl.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoControl.edit);
route.get('/contato/delete/:id', loginRequired, contatoControl.delete);

module.exports = route;