const router = require('express').Router();
let Todo = require('.../models/todos.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(users => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const todoTitle = req.body.todoTitle;
    const todoDescription = req.body.todoDescription;

    const newTodo = new Todo({
        username,
        todoTitle,
        todoDescription,
    });

    newUser.save()
        .then(() => res.json('Todo added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;