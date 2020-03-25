import {
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR
} from "../actions/types";
const initialState = {
  transactions: [],
  errors: null,
  loading: true
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: payload
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload]
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== payload
        )
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        errors: payload
      };

    default:
      return state;
  }
}
