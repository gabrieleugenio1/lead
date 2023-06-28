const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const router = express.Router();


router.get('/leads', LeadsController.listarTodos);
router.get('/leads/:id', LeadsController.getLeadById);
router.post('/leads', LeadsController.createLead);
router.put('/leads/:id', LeadsController.updateLead);
router.delete('/leads/:id', LeadsController.deleteLead);

module.exports = router;