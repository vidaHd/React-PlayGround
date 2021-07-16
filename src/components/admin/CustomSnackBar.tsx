import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useState, useImperativeHandle } from "react";

interface Iprops {
  SnackBarRef: any;
}

export type ShowSnackBar = (
  _message: string,
  _type: "warning" | "error" | "success" | "info"
) => void;

const CustomSnackBar = (props: Iprops) => {
  const { SnackBarRef } = props;

  const [open, setOpen] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"warning" | "error" | "success" | "info">(
    "info"
  );

  const showSnackBar: ShowSnackBar = (_message, _type) => {
    setMessage(_message);
    setType(_type);
    setOpen(true);
  };

  useImperativeHandle(SnackBarRef, () => ({
    showSnackBar,
  }));

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default CustomSnackBar;
