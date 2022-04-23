import React from "react";
import "./HomeScreen.css";
import { Nav, Banner, Row } from "../../Components";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row />
    </div>
  );
};

export default HomeScreen;
