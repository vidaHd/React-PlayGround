import { useEffect, useState } from "react";

import { useHistory, Link } from "react-router-dom";

import _ from "lodash";

import { connect } from "react-redux";
import { logOut } from "../../redux/actions";

import clsx from "clsx";

import {
  makeStyles,
  useTheme,
  Theme,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  IconButton,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  Typography,
  Avatar,
  Button,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Brightness5Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from "@material-ui/core/colors";

import { IpersistentDrawerRight, Iitem } from "../../interface/interface";

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
                {/* {data} */}
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
  const myStates = {
    data: state.logiReducer.users,
  };

  return myStates;
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
