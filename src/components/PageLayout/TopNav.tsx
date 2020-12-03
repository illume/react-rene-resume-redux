import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarSpacer: theme.mixins.toolbar,

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

export function TopNav({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) {
  const classes = useStyles();
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          React René Resumé Redux
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
