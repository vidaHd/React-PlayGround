import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getData } from "../../Utilities/ApiTest";

import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import Rating from "@material-ui/lab/Rating";

import AOS from "aos";

interface Idata {
  name: string;
  price: string;
  image: string;
  id: number;
  rate: number;
  comments: any;
}

const CommentProduct = (): JSX.Element => {
  const classes: any = useStyles();

  const [data, setData] = useState<Idata>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    const id = pathname.slice(13, pathname.length);
    const url = ` http://localhost:3000/products/${id}`;

    getData(url).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  AOS.init();

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <img src="https://loading.io/asset/478227" />
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.main}>
          <span className={classes.span}>
            choco
            <p className={classes.p}>Licus</p>
          </span>
          <div className={classes.boxImage}>
            <div className={classes.img}>
              <img src={data?.image} className={classes.IMG} />

              <h1 className={classes.typeProduct}>
                {data?.name}
                <br />
                {data?.price}
              </h1>
            </div>
            <div className={classes.rate}>
              <Rating value={data?.rate} />
            </div>
          </div>

          <div className={classes.commentMain}>
            <AddIcon className={classes.icon} />
            {data?.comments.map((data) => (
              <div className={classes.comment}>
                <p className={classes.CommentMessage}>{data.message}</p>
                <p className={classes.Comments}>
                  {data.createDate.slice(0, 11)}
                </p>

                <p className={classes.Comments}>{data.createDate.slice(12)}</p>

                <p className={classes.Comments}>{data.username}</p>
                <img className={classes.imgComment} src={data?.profileImage} />
              </div>
            ))}
          </div>

          <p className={classes.Back}>
            <Link className={classes.Link} to="/DataProduct">
              back now!
            </Link>
            <hr />
          </p>
        </div>
      )}
    </>
  );
};
export default CommentProduct;

const useStyles = makeStyles({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "450px",
    textAlign: "center",
  },
  main: {
    background: "#D2691E ",
    width: "100%",
    overflow: "hidden",
    height: "1200px",
  },
  commentMain: {
    background: "#8B4513",
    borderRadius: "5px",
    width: "90%",
    height: "300px",
    margin: "auto",
    marginBottom: "45px",
    overflowY: "scroll",
    boxShadow: " 1px -3px 13px saddlebrown",
    ["@media (max-width:1100px)"]: {
      width: "70%",
    },
    ["@media (max-width:800px)"]: {
      width: "90%",
    },
    ["@media (max-width:600px)"]: {
      width: "70%",
    },
  },
  span: {
    color: "#ffff",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  p: {
    color: "#F4A460",
  },
  boxImage: {
    direction: "rtl",
  },
  styleComment: {
    color: "#ffff",
    transform: "rotate(90deg)",
    width: "100px",
    display: "flex",
    justifyContent: "flex-end",
    ["@media (max-width:600px)"]: {
      width: "30px",
    },
  },
  img: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    ["@media (max-width:600px)"]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  typeProduct: {
    color: "#ffff",
    fontSize: "9vw",
    fontFamily: "italy",
    marginLeft: "15px",
    direction: "ltr",
    ["@media (max-width:600px)"]: {
      fontSize: "7vw",
      textAlign: "center",
    },
  },
  txt: {
    color: "#F4A460",
    marginLeft: "15px",
    width: "40%",
    display: "flex",
    justifyContent: "center",
    fontFamily: "italy",
    fontSize: "40px",
    ["@media (max-width:1100px)"]: {
      width: "100%",
    },
    ["@media (max-width:600px)"]: {
      fontSize: "15px",
    },
  },
  Back: {
    color: "#ffff",
    marginLeft: "50px",
    width: "100px",
    cursor: "pointer",
    ["@media (max-width:600px)"]: {
      margin: "auto",
      width: "74px",
    },
  },
  Link: {
    color: "#ffff",
    textDecoration: "none",
  },
  IMG: {
    borderRadius: "100%",
    width: "600px",
    ["@media (max-width:1100px)"]: {
      width: "400px",
    },
    ["@media (max-width:800px)"]: {
      width: "300px",
    },
    ["@media (max-width:600px)"]: {
      width: "250px",
    },
  },
  comment: {
    color: "#ffff",
    direction: "rtl",
    display: "flex",
    ["@media (max-width:600px)"]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  rate: {
    textAlign: "center",
  },
  icon: {
    color: "#F4A460",
    fontSize: "50px",
    cursor: "pointer",
    width: "100%",
    borderBottom: "0.2px solid #F4A460",
    ["@media (max-width:600px)"]: {
      fontSize: "40px",
    },
  },
  Comments: {
    width: "30%",
    color: "#ffff",
    display: "flex",
    justifyContent: "center",
  },
  CommentMessage: {
    width: "100%",
    color: "#ffff",
    display: "flex",
    justifyContent: "center",
    direction: "ltr",
    textAlign: "center",
  },
  imgComment: {
    width: "50px",
    borderRadius: "100%",
    padding: "5px",
    ["@media (max-width:600px)"]: {
      margin: "auto",
      display: "block",
    },
  },

  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
});
