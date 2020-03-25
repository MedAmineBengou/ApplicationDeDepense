import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions/transactionAction";

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)}$
      </span>
      <button
        onClick={e => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

Transaction.propTypes = {
  deleteTransaction: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired
};

export default connect(null, { deleteTransaction })(Transaction);
