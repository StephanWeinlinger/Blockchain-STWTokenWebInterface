import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Balance = (props) => {
  const [balance, setBalance] = useState("");

  const fetchBalance = () => {
    props.contract.methods
      .balanceOf(props.address)
      .call({ from: props.address })
      .then(
        (res) => setBalance(res.slice(0, 4) + "," + res.slice(4, 10) + " STW"),
        (err) => setBalance("Error occured")
      );
  };

  return (
    <>
      <h5 className="mt-2">Get current STW Token balance:</h5>
      <Button className="me-3" onClick={fetchBalance}>
        Fetch balance
      </Button>
      <span className="fw-bold">{balance}</span>
    </>
  );
};

export default Balance;
