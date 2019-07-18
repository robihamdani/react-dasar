import React from "react";

const userInput = props => {
  const userInput = {
    border: "2px solid red"
  };

  return <input type="text" onChange={props.changed} style={userInput} />;
};

export default userInput;
