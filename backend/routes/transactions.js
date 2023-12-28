const { addExpense, getExpense, updateExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, updateIncome, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .put('/edit-income/:id', updateIncome)
  .delete('/delete-income/:id', deleteIncome)
  .post('/add-expense', addExpense)
  .get('/get-expenses', getExpense)
  .put('/edit-expense/:id', updateExpense)
  .delete('/delete-expense/:id', deleteExpense);
module.exports = router;
