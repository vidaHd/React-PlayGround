import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import _ from "lodash";

import { connect } from "react-redux";
import { logOut } from "../redux/actions";

import clsx from "clsx";

import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Brightness5Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { lightBlue } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";
import { deepPurple } from "@material-ui/core/colors";

import { Iitem } from "../interface/interface";
import { IpersistentDrawerRight } from "../interface/interface";

const drawerWidth = 240;

function PersistentDrawerRight(props: IpersistentDrawerRight) {
  const { items, data } = props;
  const history = useHistory();

  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [itemList, setItemlist] = useState<Iitem[]>([]);

  const [darkState, setDarkState] = useState(
    localStorage.getItem("darkState") === "false"
  );
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  useEffect(() => {
    setItemlist(items);
  }, [items]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const JsonResult = JSON.stringify(!darkState);
    localStorage.setItem("darkState", JsonResult);
  }, [darkState]);

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,

      primary: {
        main: mainPrimaryColor,
      },

      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <Typography variant="h6" noWrap className={classes.title}>
                {props.title}
              </Typography>

              <IconButton onClick={() => setDarkState(!darkState)}>
                {darkState ? <WbSunnyIcon /> : <Brightness5Icon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
                id="opens"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
          </main>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>

              <Avatar></Avatar>
              <Typography
                noWrap
                className={classes.title}
                style={{ marginLeft: "4%" }}
              >
                {data}
              </Typography>
            </div>

            {itemList.map((item) => (
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <List>
                    <Link to={item.route} style={{ textDecoration: "none" }}>
                      <ListItem>
                        <ListItemText style={{ color: item.color }}>
                          {item.name}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  </List>
                </AccordionSummary>
              </Accordion>
            ))}

            <Button variant="contained" color="secondary" id="btnAdd">
              <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
                LogOut
              </Link>
            </Button>
          </Drawer>
        </div>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
  // const myStates = {

  //   // data: state.logiReducer.users,
  //   data: _.get(state, ["logiReducer", "users"], "default"),

  //   // _.get(logiReducer, 'users', 'default');
  // };

  // return myStates;
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const mapDispatchToProps = (disPatch) => {
  const myActions = {
    logOut: () => logOut({ disPatch }),
  };

  return myActions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerRight);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));
