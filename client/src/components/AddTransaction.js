import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions/transactionAction";
const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setTAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setTAmount("");
    setText("");
  };

  return (
    <>
      <h3>Ajouter une transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Nom</label>
          <input
            className="input-fields"
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Montant <br />
            (Négatif si c'est une dépense, positive si un encaissement)
          </label>
          <input
            className="input-fields"
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={e => setTAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default connect(null, { addTransaction })(AddTransaction);
