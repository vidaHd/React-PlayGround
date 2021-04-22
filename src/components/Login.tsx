import { useState, useRef, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Login = (props): JSX.Element => {
  const classes = useStyles();

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
    } else if (username != "admin") {
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
      history.push("/dashboard");
      props.addUser(username);
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

  return (
    <>
      <p>Date: {`${dateTime.toLocaleDateString()}`}</p>
      <p>Time: {`${dateTime.toLocaleTimeString()}`}</p>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            hellow user!
          </Typography>
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
  root: {
    width: 600,
    height: 500,
    top: "20%",
    position: "absolute",
    right: "32%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputStyle: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    position: "absolute",
    right: "44%",
    bottom: "40px",
  },
  textInput: {
    margin: "20px",
  },
});
