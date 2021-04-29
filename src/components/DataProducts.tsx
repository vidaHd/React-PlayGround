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

interface Iclases {
  color?: string;
  root?: string;
  title?: string;
  bullet?: string;
  pos?: string;
  cards?: string;
  main?: string;
  left?: string;
  right?: string;
  img?: string;
  header?: string;
  btn?: string;
  posPrice?: string;
  underH?: string;
  under?: string;
  rights?: string;
  imgCofee?: string;
  swiper?: string;
  txt?: string;
  footer?: string;
  footerTexr?: string;
  txtFoot?: string;
  icon?: string;
  icons?: string;
  iconColor?: string;
}

export default function DataProduct(): JSX.Element {
  const classes: Iclases = useStyles();

  const [data, setData] = useState<any>();

  useEffect(() => {
    getData("http://localhost:3000/products").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.pos}>
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
        <div style={{ width: "50%" }}>
          <img src={img} />
        </div>
        <div style={{ width: "50%", marginRight: "40px" }}>
          <Typography className={classes.pos}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Typography>
        </div>
      </div>
      <div className={classes.swiper}>
        <div className={classes.main}>
          {data &&
            data.map((x) => (
              <div className={classes.left}>
                <Card className={classes.root}>
                  <CardContent className={classes.cards}>
                    <img className={classes.img} src={x.image} />
                    <hr />
                    <Typography className={classes.pos}>{x.name}</Typography>
                    <Typography className={classes.posPrice}>
                      {x.price}
                    </Typography>

                    {x.isLiked === true ? (
                      <FavoriteBorderIcon />
                    ) : (
                      <FavoriteIcon className={classes.color} />
                    )}
                  </CardContent>
                  <CardActions>
                    <Button size="small" className={classes.btn}>
                      more details
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <div className={classes.txt}>
        <h1 className={classes.pos}>JOIN THE CLUB, SUBSCRIBE TODAY</h1>
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
    color: "#8B4513",
    fontFamily: "italy",
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
