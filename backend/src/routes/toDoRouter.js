// Importação do Router do express
const router = require('express').Router();
// importadação das funções do toDoController para serem utilizadas nas rotas
const toDoController = require('../controllers/toDoControler');
const validateId = require('../api/middlewares/validateId');

// Totas da aplicação -> as que necessitam do _Id é passado o middleware de validação
router.get('/get', toDoController.getAllTasks);
router.get('/get/alphasorted', toDoController.getAllTasksAlphaSorted);
router.get('/get/datesort', toDoController.getAllTasksDateSorted);
router.post('/post', toDoController.createTask);
router.put('/edit', validateId.idValidation, toDoController.updateTask);
router.delete('/remove', validateId.idValidation, toDoController.deleteTask);

module.exports = router;