const Task = require('../model/Task');

const getTasks = async (req, res) => { 
    try {
        const tasks = await Task.findAll(); 

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error find tasks' });
    }
}

const createTask = async (req, res) => { 
    const { title, description, dueDate, priority } = req.body;

    try {        
        const task = await Task.create({
            title,
            description,
            dueDate,
            priority,
          });
      
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
}

const editTask = async (req, res) => { 
    const { title, description, dueDate, priority, status } = req.body;
    const { id } = req.params;

    try {        
        const task = await Task.findByPk(id);

        if (!task) {
           return res.status(404).json('cant find task');
        }

        await task.update({
            title,
            description,
            status, 
            dueDate,
            priority,
          });
      
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
    }
}

const taskDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);
      
        if (!task) {
            return res.status(404).json('cant find task');
        }

        res.status(200).json(task);            
    } catch (error) {
        res.status(500).json({ error: 'Error getting details task' });
    }
}

const deleteTask = async (req, res) => { 
    const { id } = req.params;

    try {        
        const task = await Task.findByPk(id);
      
        if (!task) {
            return res.status(404).json('cant find task');
        }
   
        await task.destroy();

        res.status(200).json('delete task successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
}

module.exports = {
    getTasks, createTask, editTask, deleteTask, taskDetails 
  };
  