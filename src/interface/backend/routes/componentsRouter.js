const express = require('express');
const router = express.Router();
const componentsController = require('../controllers/componentsController');

router.get('/', componentsController.getComponents);

module.exports = router;