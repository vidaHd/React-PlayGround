import { useState, useEffect } from "react";

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const ProductCard = (props) => {
  const classes: any = useStyles();

  const { img, name, price, isLiked } = props;

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        <img className={classes.img} src={img} />
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography className={classes.pos}>{name}</Typography>
          <Typography className={classes.posPrice}>{price}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button size="small" className={classes.btn}>
            more details
          </Button>

          {isLiked === true ? (
            <FavoriteBorderIcon />
          ) : (
            <FavoriteIcon className={classes.color} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

const useStyles = makeStyles({
  color: {
    color: "red",
  },
  root: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    width: "30%",
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
    color: "#8B4513",
    fontFamily: "italy",
  },
  cards: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "column",
    width: "100%",
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "100%",
    flexWrap: "wrap",
    textAlign: "center",
  },
  left: {
    width: "100%",
    flex: "50%",
  },
  right: {
    width: "100%",
    flex: "50%",
  },
  header: {
    background: "#DEB887",
    height: "20px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    fontSize: "12px",
    position: "fixed",
    padding: "3px",
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
    background: "#FFF5EE",
    alignItems: "center",
    margin: "auto",
    justifyContent: "space-around",
    boxShadow: "0.2px 0.2px 0.2px 0.2px gray",
    padding: "5px",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-aurond",
    width: "100%",
    maxHeight: "800px",
    overflow: "scroll",
  },
  swiper: {
    width: "100%",
    maxHeight: "400px",
  },
  txt: {
    width: "50%",
    margin: "auto",
    marginTop: "10%",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    background: "#804224",
    width: "100%",
    height: "280px",
    marginTop: "5%",
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
