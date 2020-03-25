const Transaction = require("../models/Transaction");

// @Desc    Get All transactions
// @route   GET /api/v1/transaction
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({ transactions });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

// @Desc    Add  transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({ transaction });
  } catch (err) {
    //return res.status(500).send("Server Error");
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(err => err.message);
      return res.status(400).json({ msg: messages });
    }
  }
};

// @Desc    Delete  transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ msg: "Transaction introuvable" });
    }
    await transaction.remove();
    return res.status(200).json({ msg: "Supprimé" });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
