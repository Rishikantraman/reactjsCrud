import React from "react";
import { Redirect } from "react-router-dom";

function Protected(props) {
  let auth = localStorage.getItem("auth");
  return <div>{auth ? <props.components /> : <Redirect to="/" />}</div>;
}
export default Protected;
