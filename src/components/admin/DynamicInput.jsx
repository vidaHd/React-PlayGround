import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import React from "react";
import BoolInput from "./BoolInput";

const Dynamic = ({ filed }) => {
  const { type, name } = filed;

  let dynamicComponent;

  switch (type) {
    case "number":
      dynamicComponent = <NumberInput />;
      break;
    case "text":
      dynamicComponent = <TextInput />;
      break;
    case "boolean":
      dynamicComponent = <BoolInput />;
      break;
    default:
      "";
  }
  const handleOnChange = (value, name) => {
    console.log(value, "value");
    console.log(name, "name");
  };

  return <>{React.cloneElement(dynamicComponent, { handleOnChange, name })}</>;
};

export default Dynamic;
