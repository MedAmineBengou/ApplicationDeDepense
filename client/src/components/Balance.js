import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTransactions } from "../actions/transactionAction";

const Balance = ({ getTransactions, transaction }) => {
  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const amounts = transaction.transactions.map(
    transaction => transaction.amount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Mon Portefeuille</h4>
      <h1>{total} €</h1>
    </>
  );
};

Balance.propTypes = {
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getTransactions })(Balance);
