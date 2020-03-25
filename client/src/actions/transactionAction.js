import {
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  TRANSACTION_ERROR
} from "./types";
import axios from "axios";

export const getTransactions = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/transactions/");

    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data.transactions
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data
    });
  }
};

export const deleteTransaction = id => async dispatch => {
  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data
    });
  }
};

export const addTransaction = transaction => async dispatch => {
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    await axios.post("/api/v1/transactions/", transaction, config);
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data
    });
  }
};
