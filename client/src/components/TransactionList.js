import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionAction";
import PropTypes from "prop-types";
import Transaction from "./Transaction";
import Spinner from "./Spinner";

export const TransactionList = ({ getTransactions, transaction }) => {
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTransactions]);
  return (
    <>
      <h3>Historique</h3>
      <ul id="list" className="list">
        {transaction.loading ? (
          <Spinner />
        ) : (
          transaction.transactions.map(transaction => (
            <Transaction
              transaction={transaction}
              key={transaction._id || transaction.id}
            />
          ))
        )}
      </ul>
    </>
  );
};

TransactionList.propTypes = {
  getTransactions: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getTransactions })(TransactionList);
