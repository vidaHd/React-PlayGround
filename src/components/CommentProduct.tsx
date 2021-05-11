import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../Utilities/ApiTest";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AOS from "aos";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

interface Idata {
  name;
  price;
  image;
  id;
  rate;
  comments;
}
const CommentProduct = () => {
  const classes: any = useStyles();

  const [data, setData] = useState<Idata>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    const id = pathname.slice(13, pathname.length);
    const url = ` http://localhost:3000/products/${id}`;

    getData(url).then((res) => {
      setLoading(true);
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
          <div className={classes.dir}>
            <div className={classes.img}>
              <img src={data?.image} className={classes.IMG} />

              <h1 className={classes.textH}>
                {data && data.name && data.name}
                <br />
                {data && data.price && data.price}
              </h1>
            </div>

            <Box
              component="fieldset"
              mb={5}
              borderColor="transparent"
              style={{ direction: "ltr", marginLeft: "10%" }}
            >
              <Rating
                name="simple-controlled"
                value={data && data.rate && data.rate}
              />
            </Box>
          </div>
          <div className={classes.commentMain}>
            <AddIcon className={classes.icon} />
            {data?.comments &&
              data?.comments.map((a) => (
                <div className={classes.comment}>
                  <p className={classes.pCommentM}>{a.message}</p>
                  <p className={classes.pComment}>
                    {a.createDate.slice(0, 11)}
                  </p>

                  <p className={classes.pComment}>{a.createDate.slice(12)}</p>

                  <p className={classes.pComment}>{a.username}</p>
                  <img className={classes.imgComment} src={a?.profileImage} />
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
    height: "1000px",
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
  dir: {
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
  textH: {
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
  pComment: {
    width: "30%",
    color: "#ffff",
    display: "flex",
    justifyContent: "center",
  },
  pCommentM: {
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
