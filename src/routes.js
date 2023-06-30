const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const UsersController = require('./controllers/UsersController');
const Autentication = require('./middleware/Autentication');
const router = express.Router();

router
    .get('/leads', Autentication.verificaToken, LeadsController.listarTodos)
    .get('/leads/:id', LeadsController.getLeadById)
    .post('/leads', LeadsController.createLead)
    .put('/leads/:id', Autentication.verificaToken, LeadsController.updateLead)
    .delete('/leads/:id', Autentication.verificaToken, LeadsController.deleteLead)

router
    .get('/user/', Autentication.verificaToken, UsersController.findAll)
    .get('/user/:id', UsersController.getUserById)
    .get('/user/logout', Autentication.verificaToken, UsersController.logout)
    .post('/user', Autentication.verificaToken, UsersController.createUser)
    .post('/user/login', UsersController.login)
    .put('/user/:id', Autentication.verificaToken, UsersController.updateUser)
    .delete('/user/:id', Autentication.verificaToken, UsersController.deleteUser)
    
module.exports = router;