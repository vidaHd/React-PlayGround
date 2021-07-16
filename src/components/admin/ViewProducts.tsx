import { useState, useEffect, useRef } from "react";

import _ from "lodash";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Card,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Paper,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import EditModalFunction from "./EditeModal";

import { IrowItem, Iclases } from "../../interface/interface";


export const View = (props): JSX.Element => {
  const classes: Iclases = useStyles({ darkMode: true });

  const [formData, setFormData] = useState<IrowItem[]>([]);

  const [formDataSearchValue, setFormDataSearchValue] = useState<IrowItem[]>(
    []
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | null>();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [rowinfo, setRowinfo] = useState<any | null>();

  const [searchValue, setSearchValue] = useState<any>();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const focusbtn = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const SaveData: any = localStorage.getItem("formData");
    let objJson = JSON.parse(SaveData);

    if (objJson === undefined) {
      objJson = [];
    }
    if (objJson === null) {
      objJson = [];
    }
    for (let i = 0; i < objJson.length; i++) {
      objJson[i].id = i;
      const tests = _.get(objJson, [i, "id"], []);
    }

    setFormData(objJson);
  }, []);

  useEffect(() => {
    if (nameRef.current && nameRef.current.focus) {
      nameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setFormDataSearchValue(formData);
    }
  }, [searchValue, formData]);

  function FocusName(e) {
    if (e.keyCode === 13 && priceRef.current && priceRef.current.focus) {
      priceRef.current.focus();
    }
  }

  function FocusPrice(e) {
    if (
      e.keyCode === 13 &&
      descriptionRef.current &&
      descriptionRef.current.focus
    ) {
      descriptionRef.current.focus();
    }
  }

  function FocusRepetPassword(e) {
    if (e.keyCode === 13 && focusbtn.current && focusbtn.current.focus) {
      focusbtn.current.focus();
    }
  }

  const handelChangePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleOpenEditModal = (rowId) => {
    const rowData: any | null = formData.filter((x) => x.id == rowId);

    setRowinfo(rowData[0]);

    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const updateformData = (editedData) => {
    const newdata = formData.map((x) => {
      if (editedData.id === x.id) {
        x.name = editedData.name;
        x.description = editedData.description;
        x.price = editedData.price;
      }
      return x;
    });

    setShowEditModal(false);

    setFormData(newdata);
    const JsonNewFormEditData = JSON.stringify(newdata);
    localStorage.setItem("formData", JsonNewFormEditData);
  };

  const Validate = () => {
    if (!name) {
      alert("فیلد نام نباید خالی باشد");
      return false;
    } else if (!description) {
      alert("فیلد توضیحات نباید خالی باشد");
      return false;
    } else if (!price) {
      alert("فیلد  قیمت نباید خالی باشد");
      return false;
    } else if (isNaN(price)) {
      alert("فیلد قیمت نباید حروف باشد");
      return false;
    } else {
      return true;
    }
  };

  function handleRemoveItem(idShouldDelet): void {
    const results: IrowItem[] = formData.filter((x) => x.id != idShouldDelet);

    setFormData(results);
    const JsonResult = JSON.stringify(results);
    localStorage.setItem("formData", JsonResult);
  }

  function addOrder() {
    if (Validate()) {
      let information;

      if (formData.length === 0) {
        information = {
          id: 0,
          name: name,
          description: description,
          price: price,
        };
      } else {
        const LastId = formData[formData.length - 1].id;

        information = {
          id: LastId + 1,
          name: name,
          description: description,
          price: price,
        };
      }

      const newformdata = [...formData];
      newformdata.push(information);
      setFormData(newformdata);

      const JsonNewFormData = JSON.stringify(newformdata);

      localStorage.setItem("formData", JsonNewFormData);

      setName("");
      setDescription("");
      setPrice(null);
    }
  }

  const Delet = () => {
    const delet = formData.filter((a) => !selectedIds.includes(a.id));
    setFormData(delet);

    const JsonNewFormData = JSON.stringify(delet);
    localStorage.setItem("formData", JsonNewFormData);
  };

  function handelerSelected(id) {
    const Ids = selectedIds;

    if (Ids.includes(id)) {
      const delet = selectedIds.filter((a) => a != id);
      setSelectedIds(delet);
    } else {
      Ids.push(id);
      setSelectedIds((prevState) => [...prevState, id]);
    }
  }

  function handelerSelectedAll() {
    if (formData.length != selectedIds.length) {
      const checkbox = formData.map(function (element) {
        return element.id;
      });
      setSelectedIds(checkbox);
    } else {
      setSelectedIds([]);
    }
  }

  const handleSearchInputChanges = (e) => {
    setSearchValue(e);
    const arrSerach = formData.filter((x) => x.name.toLowerCase() === e);
    setFormDataSearchValue(arrSerach);
  };

  return (
    <>
      {showEditModal && (
        <EditModalFunction
          openEditModal={showEditModal}
          CloseEditModal={handleCloseEditModal}
          Data={rowinfo}
          update={updateformData}
        />
      )}
      <div className={classes.form}>
        <form
          className={classes.forms}
          noValidate
          autoComplete="off"
          style={{ display: "flex" }}
        >
          <TextField
            type="text"
            id="inputName"
            label="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            inputRef={nameRef}
            onKeyDown={FocusName}
            color="primary"
          />
          <TextField
            id="inputDescription"
            label="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            onKeyDown={FocusPrice}
            inputRef={priceRef}
          />
          <TextField
            id="inputPrice"
            label="price"
            onChange={handelChangePrice}
            value={price ? price : ""}
            onKeyDown={FocusRepetPassword}
            inputRef={descriptionRef}
          />
        </form>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={addOrder}
          innerRef={focusbtn}
          id="btnAdd"
        >
          send order
        </Button>

        <Button
          className={classes.btnD}
          variant="contained"
          color="secondary"
          onClick={Delet}
          id="btnAdd"
          disabled={selectedIds.length > 0 ? false : true}
        >
          delet All
        </Button>
        <input
          type="text"
          value={searchValue}
          className={classes.input}
          placeholder="Search By Name"
          onChange={(e) => handleSearchInputChanges(e.target.value)}
        ></input>

        <TableContainer className={classes.root} component={Paper}>
          <Table
            className={classes.table}
            aria-label="caption table"
            id="table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <Checkbox onClick={handelerSelectedAll} />
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="edit">
                    <IconButton color="primary" aria-label="delete">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton color="primary" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell color="textSecondary" align="right">
                  #
                </TableCell>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">description</TableCell>
                <TableCell align="right">price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(formData) &&
                formDataSearchValue.map((row: IrowItem, index: number) => (
                  <TableRow>
                    <TableCell align="right">
                      {selectedIds.includes(row.id) ? (
                        <Checkbox
                          onClick={() => handelerSelected(row.id)}
                          checked={true}
                        />
                      ) : (
                        <Checkbox
                          onClick={() => handelerSelected(row.id)}
                          checked={false}
                        />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        className={classes.button}
                        startIcon={<EditIcon />}
                        onClick={() => handleOpenEditModal(row.id)}
                        data-test-btn-edit={row.id}
                      ></Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => handleRemoveItem(row.id)}
                        data-test-btn-delete={row.id}
                      ></Button>
                    </TableCell>
                    <TableCell color="textSecondary" align="right">
                      {index}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell
                      color="textSecondary"
                      align="right"
                      data-test-input-name={row.name}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Card className={classes.roots}>
          <CardContent>
            <Typography color="textSecondary">Information</Typography>
            {formData.map((a) => (
              <Typography>
                {a.name + " - " + a.description + " - " + a.price}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

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
