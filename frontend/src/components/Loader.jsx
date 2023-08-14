import React from "react";
import ReactLoading from "react-loading";
import "./LoaderModule.css";
// const Example = ({ type, color }) => (
//     <ReactLoading type={type} color={color} height={667} width={375} />
// );
const Loader = ({ type, color }) => {
  return (
    <ReactLoading
      type={"spin"}
      color={"rgba(237, 83, 83, 1)"}
      height={"500px"}
      width={"500px"}
      margin={"auto"}
      id="loader"
    />
  );
};

export default Loader;
