import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionAction";
import { useEffect } from "react";

const IncomeExpense = ({ getTransactions, transaction }) => {
  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const amounts = transaction.transactions.map(transac => transac.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Encaissé</h4>
        <p id="money-plus" className="money plus">
          +{income} €
        </p>
      </div>
      <div>
        <h4>Dépensé</h4>
        <p id="money-minus" className="money minus">
          -{expense} €
        </p>
      </div>
    </div>
  );
};

IncomeExpense.propTypes = {
  transaction: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(mapStateToProps, { getTransactions })(IncomeExpense);
