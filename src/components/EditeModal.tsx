import { useState, useEffect } from "react";
import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

import "../../src/App.css";

import { Iclases } from "../interface/interface";

export default function EditModalFunction(props) {
  const classes: Iclases = useStyles();

  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<any>();

  const editform = {
    vida: {
      name: {},
    },
  };

  const testDate = {
    ts: "ts",
  };

  const mgData = _.merge(editform, testDate);

  useEffect(() => {
    setDescription(_.get(props, ["Data", "description"]));
    _.set(editform, ["description"], _.get(props, ["Data", "description"]));
  }, [props.Data.description]);

  useEffect(() => {
    setName(_.get(props, ["Data", "name"]));
    _.set(editform, ["vida", "name"], { test: "test" });
  }, [props.Data.name]);

  useEffect(() => {
    setPrice(_.get(props, ["Data", "price"]));
  }, [props.Data.price]);

  const handelCheckTypeInput = () => {
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

  const handleUpdate = () => {
    const isValid: boolean = handelCheckTypeInput();
    if (isValid === true) {
      const id = props.Data.id;
      const editedData = {
        id,
        name,
        description,
        price,
      };
      props.update(editedData);
    }
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={true}
        onClose={props.CloseEditModal}
        closeAfterTransition
        BackdropComponent={props.Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.openEditModal}>
          <div className={classes.paper} id="edi">
            <TextField
              type="text"
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="nameEdit"
            />
            <TextField
              value={description}
              label="description"
              onChange={(e) => setDescription(e.target.value)}
              id="descriptionEdit"
            />
            <TextField
              label="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="priceEdit"
            />
            <div className={classes.btns}>
              <button id="btnDeletRow" onClick={props.CloseEditModal}>
                close
              </button>
              <button id="btnUpdate" onClick={handleUpdate}>
                update
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
    marginTop: 100,
    width: "50%",
    margin: "auto",
    borderCollapse: "collapse",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    color: theme.palette.text.secondary,
  },
  btn: {
    marginTop: 60,
  },
  forms: {
    padding: 50,
    display: "flex",
    justifyContent: "space-between",
  },
  btns: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
}));
