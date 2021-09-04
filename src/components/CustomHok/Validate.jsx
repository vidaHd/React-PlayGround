import React, { createContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useValid from "./CustomHook";
import json from "../json.json";
import _ from "lodash";
import { useDispatch, useStore } from "react-redux";
import { CHANGE_INPUT } from "../redux/constans/index";
import { VALUE_INPUT } from "../redux/constans/index";
import { connect } from "react-redux";

const UserContext = createContext({
  username: "",
  updateUsername: () => {},
});

function Validate(props) {
  const [isFormValid, validationErrors, validateInput] = useValid();

  const initialFormData = {
    firstName: "",
    family: "",
  };

  const [formData, setFormData] = React.useState(initialFormData);

  const onChangeInput = (value, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });

    validateInput(name, value);
  };

  const handleSave = () => {
    if (isFormValid(formData)) {
      alert("ok");
    } else {
      alert("err");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(e) => onChangeInput(e.target.value, "firstName")}
          value={formData.firstName}
          style={{ background: validationErrors.firstName ? "red" : "green" }}
        />

        <TextField
          id="standard-basic"
          label="Standaard"
          onChange={(e) => onChangeInput(e.target.value, "family")}
          value={formData.family}
          style={{ background: validationErrors.family ? "red" : "green" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleSave}
        >
          check Valid
        </Button>
      </div>
    </>
  );
}
// const mapStateToProps = (state) =>(
// //

// );

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//     reset: () => dispatch({ type: "RESET" }),
//   };
// };

export default connect(null, null)(Validate);
