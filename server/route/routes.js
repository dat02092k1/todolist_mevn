const express = require('express');
const task = require('../controller/task.js');
 
const router = express.Router();
 
router.get('/get-all', task.getTasks);
router.post('/create', task.createTask);
router.put('/edit/:id', task.editTask);
router.delete('/delete/:id', task.deleteTask);
router.get('/details/:id', task.taskDetails);

module.exports = router;                         