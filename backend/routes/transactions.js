const {
  addExpense,
  getExpense,
  deleteExpense,
  updateExpense,
  getSigleExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
  getSigleIncome,
  updateIncomes,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .get("/get-incomes/:id", getSigleIncome)
  .delete("/delete-income/:id", deleteIncome)
  .patch("/update-income/:id", updateIncomes)
  //
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .get("/get-expenses/:id", getSigleExpense)
  .delete("/delete-expense/:id", deleteExpense)
  .patch("/update-expense/:id", updateExpense);
module.exports = router;
