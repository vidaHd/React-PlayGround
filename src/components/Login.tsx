import { useState, useRef, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions";

import { getData } from "../Utilities/ApiTest";

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

export const Login = (props): JSX.Element => {
  const classes: any = useStyles();

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<number>();
  const [repetPassword, setRepetPassword] = useState<number>();

  const [dateTime, setDateTime] = useState(new Date());

  const history = useHistory();

  const focusName = useRef<HTMLInputElement>();
  const focusPassWord = useRef<HTMLInputElement>(null);
  const focusRepetPassWord = useRef<HTMLInputElement>(null);
  const focusBtn = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const myTime = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(myTime);
    };
  }, []);

  useEffect(() => {
    if (focusName.current && focusName.current.focus) {
      focusName.current.focus();
    }
  }, []);

  function FocusName(e) {
    if (
      e.keyCode === 13 &&
      focusPassWord.current &&
      focusPassWord.current.focus
    ) {
      focusPassWord.current.focus();
    }
  }
  function FocusPassword(e) {
    if (
      e.keyCode === 13 &&
      focusRepetPassWord.current &&
      focusRepetPassWord.current.focus
    ) {
      focusRepetPassWord.current.focus();
    }
  }
  function FocusRepetPassword(e) {
    if (e.keyCode === 13 && focusBtn.current && focusBtn.current.focus) {
      focusBtn.current.focus();
    }
  }
  const validation = () => {
    if (!username) {
      alert("نام کاربری را وارد کنید");
      return false;
    } else if (!password) {
      alert("پسورد را وارد کنید");
      return false;
    } else if (!repetPassword) {
      alert("رمز عبور خود را دوباره وارد کنید");
      return false;
    } else if (password != repetPassword) {
      alert("پسورد با تکرار پسورد یکی نمیباشد");
      return false;
    } else if (username != "admin" && username != "user") {
      alert("نام کاربری اشتباه است");
      return false;
    } else if (password != 12345) {
      alert("رمز اشتباه است");
      return false;
    } else if (repetPassword != 12345) {
      alert("رمز برابر نیست با تکرار رمز");
      return false;
    } else {
      return true;
    }
  };

  const checkValid = () => {
    if (validation()) {
      getData("http://localhost:3000/Login")
        .then((respons: any) => {
          console.log("res", respons);
          if (respons.status === "success" && username === "admin") {
            history.push("/dashboard");
            props.addUser(username);
          } else if (username === "user") {
            history.push("/DataProduct");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleChangeRepetPassword = (e) => {
    const value = e.target.value;
    setRepetPassword(value);
  };
  const now: Date = new Date();

  return (
    <>
      <div className={classes.bg}>
        <p style={{ fontSize: "25px" }}>{`${dateTime.toLocaleDateString(
          "fa-IR"
        )}`}</p>
        <p style={{ fontSize: "25px" }}>
          {`${dateTime.toLocaleTimeString("fa")}`}{" "}
        </p>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          hellow user!
        </Typography>
        <Card className={classes.root}>
          <CardContent>
            <form className={classes.inputStyle} autoComplete="off">
              <TextField
                className={classes.textInput}
                label="UserName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={FocusName}
                inputRef={focusName}
              />
              <TextField
                className={classes.textInput}
                label="Password"
                value={password}
                onChange={handleChangePassword}
                inputRef={focusPassWord}
                onKeyDown={FocusPassword}
              />
              <TextField
                className={classes.textInput}
                label="repeat the password"
                value={repetPassword}
                onChange={handleChangeRepetPassword}
                inputRef={focusRepetPassWord}
                onKeyDown={FocusRepetPassword}
              />
            </form>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="remember me"
            />
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
              onClick={checkValid}
              innerRef={focusBtn}
            >
              login
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

const mapDispatchToProps = (disPatch) => {
  const myUser = {
    addUser: (payload) => loginUser({ payload, disPatch }),
  };
  console.log(myUser);

  return myUser;
};

export default connect(null, mapDispatchToProps)(Login);

const useStyles = makeStyles({
  bg: {
    height: "900px",
    marginTop: "-1%",
    overflowY: "hidden",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5410539215686274) 0%, rgba(0,212,255,0) 100%)",
  },
  root: {
    width: "40%",
    height: 500,
    top: "20%",
    margin: "auto",
    right: "32%",

    ["@media (max-width:600px)"]: {
      width: "80%",
    },
  },
  title: {
    fontSize: 25,
    display: "flex",
    textAlign: "center",
    margin: "auto",
    justifyContent: "center",
    marginBottom: "20px",
  },
  pos: {
    marginBottom: 12,
  },
  inputStyle: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: "auto",
  },
  textInput: {
    margin: "20px",
  },
});
