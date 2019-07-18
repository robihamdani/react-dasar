import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Name : {props.userName}</p>
      <p>i hope this text can change</p>
    </div>
  );
};

export default userOutput;
