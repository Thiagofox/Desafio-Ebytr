const router = require('express').Router();
const toDoController = require('../controllers/toDoControler');

router.get('/get', toDoController.getAllTasks);
router.post('/post', toDoController.createTask);

module.exports = router;