const router = require('express').Router();
const toDoController = require('../controllers/toDoControler');
const validateId = require('../api/middlewares/validateId');

router.get('/get', toDoController.getAllTasks);
router.get('/get/alphasorted', toDoController.getAllTasksAlphaSorted);
router.get('/get/datesort', toDoController.getAllTasksDateSorted);
router.post('/post', toDoController.createTask);
router.put('/edit', validateId.idValidation, toDoController.updateTask);
router.delete('/remove', validateId.idValidation, toDoController.deleteTask);

module.exports = router;