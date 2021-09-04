import React from "react";

const NumberInput = (props) => {
  const [numbers, setNumbers] = React.useState("");

  const handleSeprtateNums = (e) => {
    const value = String(e.target.value);
    const seprteNums = value
      .replace(/,/g, "")
      .replace(/\s/g, "")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    setNumbers(seprteNums);
    props.handleOnChange(value, props.name);
  };

  return (
    <>
      {/* {React.cloneElement(<NumberInput />, {})} */}
      <p>please type</p>
      <input
        type="text"
        onChange={(e) => handleSeprtateNums(e)}
        value={numbers}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
    </>
  );
};

export default NumberInput;
