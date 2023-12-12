const express = require('express');
const router = express.Router();
const llmController = require('../controllers/llmController');


// rota para publicar uma mensagem
router.post("/llm")

// router.get('/get/:component', componentsController.getComponents);
// router.post('/post', componentsController.postComponents);
// router.post('/update', authenticateToken, componentsController.updateComponents);

module.exports = router;