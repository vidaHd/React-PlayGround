import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../src/App.css";
import { Order } from "../redux/actions";
import { connect } from "react-redux";

interface Iclases {
  modal?: string;
  table?: string;
  root: string;
  btn: string;
  forms: string;
  paper?: string;
  button?: string;
}
interface IviewOrder {
  id: number;
  nameOrder: string;
  priceOrder: number;
}
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

  forms: {
    padding: 50,
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
  },
}));

export const ViewOrder = () => {
  const classes: Iclases = useStyles();

  const [nameOrder, setNameOrder] = useState<string>("");
  const [priceOrder, setPriceOrder] = useState<number>();
  const [data, setData] = useState<IviewOrder[]>([]);

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
  const handlechangeNameOrder = (e) => {
    const value = e.target.value;
    setNameOrder(value);
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
      //   const newformdata = data;
      //   newformdata.push(information);
      //   setData(newformdata);

      setNameOrder("");
      setPriceOrder(5);
    }
  }

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
            onChange={handlechangeNameOrder}
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
  console.log(state);
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
