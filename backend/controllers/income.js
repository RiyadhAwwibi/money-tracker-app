const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
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
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(200).json({ message: "Server Error" });
  }

  console.log(income);
};

exports.getIncomes = async (req, res) => {
  let incomes;
  const { month, year } = req.query;
  console.log(req.query);
  const parsedMonth = parseInt(month);
  const parsedYear = parseInt(year);

  try {
    if (Object.keys(req.query).length === 0) {
      incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    } else {
      incomes = await IncomeSchema.find({
        date: {
          $gte: new Date(parsedYear, parsedMonth - 1, 1), // Bulan dimulai dari 0, sehingga kurangkan 1
          $lt: new Date(parsedYear, parsedMonth, 1),
        },
      });
    }
    res.status(200).json(incomes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getSigleIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const incomes = await IncomeSchema.findById(id);
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateIncomes = async (req, res) => {
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
    const income = await IncomeSchema.findByIdAndUpdate(
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
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(200).json({ message: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
