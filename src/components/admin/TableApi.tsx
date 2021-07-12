import { useState, useEffect, useRef } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Iclases } from "../../interface/interface";
import { getData } from "../../Utilities/ApiTest";

const tableApi = () => {
  const classes: Iclases = useStyles();

  const [data, setData] = useState<any>([{ id: 2, name: "F", age: 2 }]);

  useEffect(() => {
    getData("http://localhost:3000/Table").then((respone) => {
      setData(respone);
    });
  }, []);

  return (
    <>
      <div className={classes.form}>
        <TableContainer className={classes.root} component={Paper}>
          <Table
            className={classes.table}
            aria-label="caption table"
            id="table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">#</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((a) => (
                <TableRow>
                  <TableCell align="right">{a.id}</TableCell>
                  <TableCell align="right">{a.name}</TableCell>
                  <TableCell align="right">{a.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default tableApi;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
    marginTop: 200,
    width: "50%",
    margin: "auto",
    borderCollapse: "collapse",
    border: "0.1px solid gray",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    marginTop: 340,
    position: "absolute",
    margin: "auto",
    outline: "none",
    padding: 10,
    left: "28%",
    width: "42%",
  },
  iconButton: {
    padding: 10,
    marginTop: 14,
    position: "absolute",
    left: "52%",
  },
  roots: {
    width: "20%",
    margin: "auto",
    marginTop: 50,
    overflowY: "scroll",
    minHeight: 100,
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  btn: {
    marginTop: 200,
    position: "absolute",
    left: "45%",
    backgroundColor: theme.palette.text.secondary,
  },
  btnD: {
    marginTop: 270,
    position: "absolute",
    left: "45.5%",
  },
  forms: {
    padding: 50,
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
    color: theme.palette.text.secondary,
  },
  inp: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    margin: "auto",
    color: theme.palette.text.secondary,
  },
}));
