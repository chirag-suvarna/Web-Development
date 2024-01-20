import React, { useEffect } from "react";
import Web3 from "web3";

const Main = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const web3 = new Web3(
          "https://rpc-mumbai.maticvigil.com/v1/8a5c3852f3faafe23f2831d134da2c62c8ef2150"
        );
        const blockNumber = await web3.eth.getBlockNumber();
        // get the balance of an address
        await web3.eth.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
        // ↳ 114438180989009447638n

        console.log("Block Number:", blockNumber);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return <div>Main</div>;
};

export default Main;
