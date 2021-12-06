import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Transfer = (props) => {
  const [status, setStatus] = useState("");

  const transferBalance = () => {
    setStatus("Processing...");
    props.contract.methods
      .transfer(
        "0x15433DA387451F9dE4565280C85506CB71aF9376",
        "10000000000000000000"
      )
      .send({ from: props.address })
      .then(
        (res) => setStatus("Successfully transfered 10 STW"),
        (err) => setStatus("Error occured")
      );
  };

  return (
    <>
      <h5 className="mt-2">Transfer 10 STW to 0x154...76:</h5>
      <Button className="me-3" onClick={transferBalance}>
        Transfer balance
      </Button>
      <span className="fw-bold">{status}</span>
    </>
  );
};

export default Transfer;
