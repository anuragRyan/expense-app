const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;
