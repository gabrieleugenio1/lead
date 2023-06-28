const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const router = express.Router();


router
.get('/leads', LeadsController.listarTodos)
.get('/leads/:id', LeadsController.getLeadById)
.post('/leads', LeadsController.createLead)
.put('/leads/:id', LeadsController.updateLead)
.delete('/leads/:id', LeadsController.deleteLead)

module.exports = router;