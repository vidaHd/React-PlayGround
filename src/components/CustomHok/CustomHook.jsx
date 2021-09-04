import { useState } from "react";

function useValid() {
  const [validationErrors, setValidationErrors] = useState({});

  //formLeve

  const isFormValid = (formData) => {
    let isValid = true;
    for (const key in formData) {
      if (!formData[key]) {
        isValid = false;
      }
    }
    return isValid;
  };

  //feildLevel
  const validateInput = (name, value) => {
    if (!value) {
      setValidationErrors((prevState) => {
        return { ...prevState, [name]: true };
      });
    } else {
      setValidationErrors((prevState) => {
        return { ...prevState, [name]: false };
      });
    }
  };

  return [isFormValid, validationErrors, validateInput];
}

export default useValid;
