import { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";
import { incrementOrderAction, deleteOrderAction } from "../../redux/actions";

import Button from "@material-ui/core/Button";
import {
  makeStyles,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { Iclases } from "../../interface/interface";

const ViewOrder = (props) => {
  const { data } = props;

  const classes: Iclases = useStyles();

  const [nameOrder, setNameOrder] = useState<string>("");
  const [priceOrder, setPriceOrder] = useState<number | null>();

  const focusName = useRef<HTMLInputElement>(null);
  const priceFocuse = useRef<HTMLInputElement>(null);
  const btnFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusName.current && focusName.current.focus) {
      focusName.current.focus();
    }
  }, []);

  function focusNameOrder(e) {
    if (e.keyCode === 13 && priceFocuse.current && priceFocuse.current.focus) {
      priceFocuse.current.focus();
    }
  }

  function focusOrderOrder(e) {
    if (e.keyCode === 13 && btnFocus.current && btnFocus.current.focus) {
      btnFocus.current.focus();
    }
  }

  const validate = () => {
    if (!nameOrder) {
      alert("نام محصول را وارد کنید");
      return false;
    } else if (!priceOrder) {
      alert("قیمت محصول را وارد کنید ");
      return false;
    } else if (isNaN(priceOrder)) {
      alert("فیلد قیمت نباید حروف باشد");
      return false;
    } else {
      return true;
    }
  };

  const handleChangePriceOrder = (e) => {
    const value = e.target.value;
    setPriceOrder(value);
  };

  function addOrderNew() {
    if (validate()) {
      let information;

      if (data.length === 0) {
        information = {
          id: 0,
          nameOrder: nameOrder,
          priceOrder: priceOrder,
        };
      } else {
        const LastId = data[data.length - 1].id;

        information = {
          id: LastId + 1,
          nameOrder: nameOrder,
          priceOrder: priceOrder,
        };
      }

      const newformdata = [...data];
      newformdata.push(information);

      props.addOrder(newformdata);

      setNameOrder("");
      setPriceOrder(null);
    }
  }
  const Delet = () => {
    props.deleteOrder();
  };

  return (
    <>
      <div>
        <form
          className={classes.forms}
          noValidate
          autoComplete="off"
          style={{ display: "flex" }}
        >
          <TextField
            type="text"
            id="standard-basic"
            label="nameOrder"
            onChange={(e) => setNameOrder(e.target.value)}
            value={nameOrder}
            inputRef={focusName}
            onKeyDown={focusNameOrder}
          />
          <TextField
            id="standard-basic"
            label="priceOrder"
            onChange={handleChangePriceOrder}
            value={priceOrder ? priceOrder : ""}
            onKeyDown={focusOrderOrder}
            inputRef={priceFocuse}
          />
        </form>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={addOrderNew}
          innerRef={btnFocus}
        >
          send order
        </Button>

        <Button
          className={classes.btnD}
          variant="contained"
          color="secondary"
          onClick={Delet}
          id="btnAdd"
        >
          delet All
        </Button>

        <TableContainer className={classes.root} component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data) => (
                <TableRow>
                  <TableCell align="right">{data.id}</TableCell>
                  <TableCell align="right">{data.nameOrder}</TableCell>
                  <TableCell align="right">{data.priceOrder}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const myStates = {
    data: state.orderReducer.orders,
  };

  return myStates;
};

const mapDispatchToProps = (disPatch) => {
  const myActions = {
    addOrder: (payload) => incrementOrderAction({ payload, disPatch }),
    deleteOrder: () => deleteOrderAction({ disPatch }),
  };
  return myActions;
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
    marginTop: 200,
    width: "50%",
    margin: "auto",
    borderCollapse: "collapse",
    border: "0.1px solid gray",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  btn: {
    marginTop: 70,
    position: "absolute",
    left: "45%",
  },
  btnD: {
    marginTop: 130,
    position: "absolute",
    left: "45.5%",
  },
  forms: {
    padding: 50,
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
  },
}));
