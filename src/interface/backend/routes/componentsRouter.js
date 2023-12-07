const express = require('express');
const router = express.Router();
const componentsController = require('../controllers/componentsController');

router.get('/get', componentsController.getComponents);
router.post('/post', componentsController.postComponents);

module.exports = router;