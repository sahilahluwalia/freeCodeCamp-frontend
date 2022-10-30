import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import axios from "axios";
const baseURL = process.env.REACT_APP_LINK;

export const Userpage = () => {
  const [cardData, setCardData] = useState();
  const fetcher = async () => {
    const result = await axios.get(baseURL + "/api/getdata");
    console.log("API RECIVED DATA ");
    console.log(result.data);
    setCardData(result.data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
      <Navbar signin={true} />
      <div className="bg-lightblue h-full mx-auto  items-center flex flex-col ">
        <p className="text-2xl font-semibold my-10">
          Welcome to freeCodeCamp.org
        </p>
        <p className="text-xl ">
          "I have not failed. I've just found 10,000 ways <br></br> that won't
          work"
        </p>
        <p className="text-lg italic font-light mb-10">- Thomas A. Edison</p>
        <Card data={cardData} />
        <div className="pb-10 mb-10"></div>
      </div>
    </>
  );
};
