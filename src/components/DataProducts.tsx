import { useState, useEffect } from "react";

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import "../App.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { getData } from "../Utilities/ApiTest";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import img from "../coffe.jpg";

import i from "../8.jpg";

import ProductCard from "./ProductCard";

export default function DataProduct(): JSX.Element {
  const classes: any = useStyles();

  const [data, setData] = useState<any>();

  useEffect(() => {
    getData("http://localhost:3000/products").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.posH}>
          20% OFF SITEWIDE THROUGH MOTHER'S DAY
        </Typography>
      </div>
      <div className={classes.underH}>
        <div style={{ width: "20%" }} className={classes.under}>
          <Typography className={classes.pos}>home</Typography>
          <Typography className={classes.pos}>contact</Typography>

          <Typography className={classes.pos}>call</Typography>
          <Typography className={classes.pos}>addres</Typography>
        </div>
        <div style={{ width: "80%" }} className={classes.rights}>
          <Typography className={classes.pos}>My coffee</Typography>
        </div>
      </div>
      <div className={classes.imgCofee}>
        <div style={{ width: "100%" }} className={classes.imgFixed}>
          <img src={i} style={{ width: "100%" }} />
        </div>
        <div
          style={{
            marginRight: "40px",
          }}
        >
          <Typography className={classes.posHT}>Café capsules</Typography>
        </div>
        <div>
          <Typography className={classes.description}>
            Pas le temps de moudre votre café en grain? Découvrez la gamme de
            cafés en capsules proposée par Cafés Henri. Savourez un expresso
            riche en goût, rapide à préparer...
          </Typography>
        </div>
      </div>

      <div className={classes.swiper}>
        <div className={classes.main}>
          {data &&
            data.map((x) => (
              <ProductCard
                img={x.image}
                name={x.name}
                price={x.price}
                isLiked={x.isLiked}
              />
            ))}
        </div>
      </div>

      <div className={classes.txt}>
        <h1 className={classes.posHT}>JOIN THE CLUB,</h1>
      </div>

      <div className={classes.footer}>
        <div className={classes.footerTexr}>
          <span className={classes.txtFoot}>
            help center
            <p>
              Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
              Ipsum is simply dummy Lorem Ipsum is simply dummy
            </p>
          </span>
          <span className={classes.txtFoot}>
            Gift
            <p> Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy</p>
          </span>
          <span className={classes.txtFoot}>
            more information
            <p> Lorem Ipsum is simply dummy</p>
          </span>
        </div>
      </div>
      <div className={classes.icon}>
        <div className={classes.icons}>
          <TwitterIcon className={classes.iconColor} />
          <WhatsAppIcon className={classes.iconColor} />
          <MailIcon className={classes.iconColor} />
          <LinkedInIcon className={classes.iconColor} />
          <InstagramIcon className={classes.iconColor} />
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  color: {
    color: "red",
  },
  posHT: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    fontFamily: "italy",
    marginTop: "2%",
  },
  imgFixed: {
    backgroundImage: "url(8.jpg)",
    backgroundAttachment: "fixed",
  },
  description: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    textAlign: "center",
    fontFamily: "italy",
    fontSize: "15px",
    textShadow: "2px 2px 2px yellow",
    marginBottom: "3%",
  },
  root: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    width: "40%",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "30px",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "#ffff",
    fontFamily: "italy",
  },
  posH: {
    color: "#3f3534",
    "$:hover": {
      color: "#ffee18",
    },
  },
  cards: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "100%",
    flexWrap: "wrap",
    textAlign: "center",
    borderBottom: "0.2px solid #804224",
  },
  left: {
    // width: "100%",
    // flex: "50%",
  },
  right: {
    // width: "100%",
    // flex: "50%",
  },
  header: {
    background: "#ffee18",
    height: "20px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    fontSize: "12px",
    padding: "3px",
    position: "fixed",
  },
  btn: {
    color: "#D2691E",
  },
  posPrice: {
    color: "#D2691E",
  },
  underH: {
    height: "70px",
    width: "100%",
    display: "flex",
    background: "#3f3534",
    alignItems: "flex-end",
    color: "#ffff",
    margin: "auto",
    justifyContent: "space-around",
  },
  under: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-around",
    fontFamily: "italy",
  },
  rights: {
    display: "flex",
    alignItems: "start",
    justifyContent: "flex-end",
    marginRight: "20px",
  },
  imgCofee: {
    width: "100%",
    maxHeight: "800px",
    objectFit: "cover",
  },

  swiper: {
    width: "100%",
    // maxHeight: "400px",
  },
  txt: {
    width: "100%",
    margin: "auto",
    marginTop: "5%",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8bf50",
  },
  footer: {
    background: "#804224",
    width: "100%",
    height: "280px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  footerTexr: {
    color: "#ffff",
    display: "flex",
    width: "80%",
    marginTop: "20px",
    justifyContent: "space-around",
  },
  txtFoot: {
    width: "200px",
  },
  icon: {
    background: "#1f130c",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    width: "15%",
    cursor: "pointer",
    justifyContent: "space-between",
  },
  iconColor: {
    color: "#ffff",
    width: "20px",
  },
});
