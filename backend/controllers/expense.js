const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date: date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await income.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(200).json({ message: "Server Error" });
  }

  console.log(income);
};

exports.getSigleExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const incomes = await ExpenseSchema.findById(id);
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  let incomes;
  const { month, year } = req.query;
  const parsedMonth = parseInt(month);
  const parsedYear = parseInt(year);

  try {
    if (Object.keys(req.query).length === 0) {
      incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
    } else {
      incomes = await ExpenseSchema.find({
        date: {
          $gte: new Date(parsedYear, parsedMonth - 1, 1), // Bulan dimulai dari 0, sehingga kurangkan 1
          $lt: new Date(parsedYear, parsedMonth, 1),
        },
      }).sort({ createdAt: -1 });
    }
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const { id } = req.params;

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }

    const income = await ExpenseSchema.findByIdAndUpdate(
      id,
      {
        title,
        amount,
        category,
        description,
        date: date,
      },
      { new: true }
    );

    console.log(income);
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(200).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
