import { makeStyles, Button, Typography } from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const ProductCard = (props) => {
  const classes: any = useStyles();

  const { img, name, price, isLiked, id } = props;

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
          <Button size="small" className={classes.btn} onClick={id}>
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
    ["@media (max-width:780px)"]: {
      width: "80%",
    },
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
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
    "&:hover": {
      transform: " scale(1.05)",
      opacity: " 0.9",
      boxShadow: "20px 20px 40px 0px rgba(0,0,0,0.5)",
    },
  },

  btn: {
    color: "#D2691E",
  },
  posPrice: {
    color: "#D2691E",
  },
});
