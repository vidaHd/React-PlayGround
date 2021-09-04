import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import Dynamic from "./DynamicInput";

const BoolInput = (props) => {
  const [check, setCheck] = React.useState(false);
  const handleChecked = (e) => {
    const value = e.target.checked;
    setCheck(!check);
    props.handleOnChange(value, props.name);
  };

  return (
    <>
      <p>please checked</p>
      <Checkbox onChange={(e) => handleChecked(e)} />
    </>
  );
};

export default BoolInput;
