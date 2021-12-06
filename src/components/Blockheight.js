import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Blockheight = (props) => {
  const [height, setHeight] = useState("");

  const fetchHeight = () => {
    props.web3.eth.getBlockNumber().then(
      (res) => setHeight(res),
      (err) => setHeight("Error occured")
    );
  };

  return (
    <>
      <h5>Get current Ropsten Blockheight:</h5>
      <Button className="me-3" onClick={fetchHeight}>
        Fetch height
      </Button>
      <span className="fw-bold">{height}</span>
    </>
  );
};

export default Blockheight;
