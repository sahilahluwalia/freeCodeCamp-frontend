import React from "react";
import { MainSection } from "../components/MainSection";
import Navbar from "../components/Navbar";
export const Homepage = () => {
  return (
    <>
      <Navbar signin={false} />
      <MainSection />
    </>
  );
};
