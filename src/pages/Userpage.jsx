import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_LINK;

export const Userpage = () => {
  const usertoken = localStorage.getItem("token");
  let navigate = useNavigate();
  const [token, setToken] = useState(usertoken);
  const [cardData, setCardData] = useState();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const refreshToken = localStorage.getItem("refreshToken");

  const renewToken = async () => {
    try {
      const result = await axios.post(baseURL + "/api/token", {
        token: refreshToken,
      });
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        // console.log("Token reused");
      }
    } catch (e) {
      console.log(e);
      // console.log("renew token error");
    }
  };
  const fetcher = async () => {
    try {
      // console.log(token);
      const result = await axios.get(baseURL + "/api/getdata", config);
      // console.log("API RECIVED DATA ");
      // if (result.response.status === 403) {
      //   console.log("token gone");
      // }
      // console.log(result.data);
      // console.log(result);
      setCardData(result.data);
    } catch (e) {
      // console.log("error");
      // console.log(e);
      renewToken();
      // if (e.response.status === 403) {
      //   console.log("token gone");

      // }
    }
  };
  const tokenchecker = () => {
    // console.log("token value is ");
    // console.log(token);
    if (token == null) {
      navigate("/");
    }
  };

  useEffect(() => {
    tokenchecker();
    fetcher();
  }, [token]);

  // if (!token) {
  //
  // }
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
