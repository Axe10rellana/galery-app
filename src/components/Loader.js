import React from "react";
import "./Loader.css";
import loader from "../assets/three-dots.svg";

const Loader = () => {
  return (
    <div>
      <img className="loader" src={loader} alt="Cargando..."></img>
    </div>
  );
};

export default Loader;
