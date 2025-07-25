const express = require('express');
const router = express.Router();
const {
    getAllDustbins,
    createDustbin,
    updateDustbin,
    deleteDustbin
}= require('../controllers/dustbinController');

//define routes
router.get('/', getAllDustbins); // Get all dustbins
router.post('/', createDustbin); // Create a new dustbin
router.put('/:id', updateDustbin); // Update a dustbin by ID
router.delete('/:id', deleteDustbin); // Delete a dustbin by ID

module.exports = router;
