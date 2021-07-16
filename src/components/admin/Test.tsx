import { useRef } from "react";

import Button from "@material-ui/core/Button";

import CustomSnackBar, { ShowSnackBar } from "./CustomSnackBar";

const btnTest = () => {
  const SnackBarRef = useRef<{ showSnackBar: ShowSnackBar }>();

  const showMeesage = () => {
    if (SnackBarRef?.current?.showSnackBar) {
      SnackBarRef.current.showSnackBar("test", "success");
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={showMeesage}>
        open
      </Button>
      <CustomSnackBar SnackBarRef={SnackBarRef} />
    </>
  );
};
export default btnTest;
