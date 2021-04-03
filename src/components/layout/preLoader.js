import React from "react";
import LoadingIcon from "./../../assets/loading.gif";
import "./preLoader.css";

const Preloader = () => {
  return (
    <img
      src={LoadingIcon}
      className="loading horizontal-middle-align"
      alt="Loading.."
    />
  );
};
export default Preloader;
