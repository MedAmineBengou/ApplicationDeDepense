import React, { Fragment } from "react";
import spiner from "../img/spiner.gif";

const Spinner = props => {
  return (
    <Fragment>
      <img
        src={spiner}
        alt=""
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
