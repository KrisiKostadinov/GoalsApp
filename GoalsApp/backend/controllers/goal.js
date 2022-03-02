const Goal = require('../models/Goal');

const setGoal = async(req, res) => {
    const { content } = req.body;

    if (!content) {
        throw new Error('Content field is required');
    }

    const goal = await Goal.create({
        content: content
    });

    res.status(201).send(goal);
};

const getAll = async(req, res) => {
    const goals = await Goal.find();
    res.send(goals);
};

const getGoal = async(req, res) => {

    const { id } = req.params;

    if (!id) {
        throw new Error('Invalid goal id');
    }

    const goal = await Goal.findById(id);

    res.status(200).send(goal);

}

const deleteGoal = async(req, res) => {

    const { id } = req.params;

    if (!id) {
        throw new Error('Invalid goal id');
    }

    const goal = await Goal.findByIdAndDelete(id);

    res.status(200).send(goal);

}

const updateGoal = async(req, res) => {

    const { id } = req.params;
    const { content } = req.body;

    const goal = await Goal.findById(id);

    if (goal) {
        res.status(400);
        throw new Error('Invalid goal');
    }

    const updatedGoal = await Goal.findOneAndUpdate(id, {
        content: content
    }, {
        new: true,
    });

    res.status(200).send(updatedGoal);
}

module.exports = {
    setGoal,
    getAll,
    getGoal,
    deleteGoal,
    updateGoal
}