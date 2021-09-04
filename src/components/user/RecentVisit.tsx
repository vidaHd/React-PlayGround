import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Dynamic from "../admin/DynamicInput";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles((theme: any) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const Recent = () => {
  const [local, setLocal] = useState<string[]>([]);

  useEffect(() => {
    const convert: any = JSON.parse(localStorage.getItem("recently") ?? "");
    for (let i = 0; i < convert?.length; i++) {
      for (let j = 0; j < convert?.length; j++) {
        if (convert[i] == convert[j] && i !== j) {
          convert[j] = null;
        }
      }
    }
    const filtered = convert.filter(function (el) {
      return el != null;
    });

    setLocal(filtered);
  }, []);

  return (
    <>
      <div
        style={{ background: "#FFDEAD", height: "950px", overflow: "hidden" }}
      >
        <div
          style={{ width: "100%", background: "#8B4513", height: "50px" }}
        ></div>
        <div style={{ width: "50%", margin: "auto", marginTop: "200px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ background: "#8B4513", color: "#ffff" }}>
                    Name Product
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {local.map((row) => (
                  <TableRow key={row}>
                    <TableCell>{row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (disPatch) => {
  // console.log("dispatch");
};
export default connect(null, mapDispatchToProps)(Recent);
