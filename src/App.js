import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Web3 from "web3";

import { STW_ADDRESS, STW_ABI } from "./components/contractData";
import Navbar from "./components/Navbar";
import Blockheight from "./components/Blockheight";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";

const App = () => {
  const [address, setAddress] = useState("Error occured");
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(STW_ABI, STW_ADDRESS);

  useEffect(() => {
    const fetchAccount = async () => {
      const account = await web3.eth.requestAccounts();
      setAddress(account.toString());
    };
    fetchAccount();
  }, []);

  return (
    <Container>
      <Navbar />
      <Blockheight web3={web3} />
      <Balance address={address} contract={contract} />
      <Transfer address={address} contract={contract} />
    </Container>
  );
};

export default App;
