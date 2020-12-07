// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/todo';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const todoSchema = new mongoose.Schema({
  text: String
});

// create mongoose model
const Todo = mongoose.model('Todo', todoSchema);


/_ GET api listing. _/
router.get('/', (req, res) => {
        res.send('api works');
});

router.get('/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) res.status(500).send(error)

        res.status(200).json(todos);
    });
});

router.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todos) => {
        if (err) res.status(500).send(error)

        res.status(200).json(todos);
    });
});


router.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todos) => {
        if (err) res.status(500).send(error)

        res.status(200).json(todos);
    });
});

router.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.todo,
    });

    todo.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Todo created successfully'
        });
    });
});

module.exports = router;