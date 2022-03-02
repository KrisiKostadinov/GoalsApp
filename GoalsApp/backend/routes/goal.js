const express = require('express');
const router = express.Router();

const { getAll, setGoal, updateGoal, deleteGoal, getGoal } = require('../controllers/goal');

router.route('/').get(getAll).post(setGoal);
router.route('/:id').get(getGoal).post(setGoal).delete(deleteGoal).put(updateGoal);

module.exports = router;