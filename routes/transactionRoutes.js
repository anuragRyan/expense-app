const express = require("express");
const {
  addTransaction,
  getTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controller/transactionController");

const router = express.Router();

router.post("/add-transaction", addTransaction);

router.post("/edit-transaction", editTransaction);

router.post("/delete-transaction", deleteTransaction);

router.post("/get-transactions", getTransactions);

module.exports = router;
