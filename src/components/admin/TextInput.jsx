import React from "react";
import Dynamic from "./DynamicInput";

const TextInput = (props) => {
  const [numbers, setNumbers] = React.useState("");

  const handleSeprtateNums = (e) => {
    const value = e.target.value;
    setNumbers(value);
    props.handleOnChange(value, props.name);
  };

  return (
    <>
      <p>please</p>
      <input
        type="text"
        onChange={(e) => handleSeprtateNums(e)}
        value={numbers}
      />
    </>
  );
};

export default TextInput;
