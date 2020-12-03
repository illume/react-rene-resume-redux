import * as React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Links from "./Links";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      whiteSpace: "nowrap",
      width: drawerWidth,
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    },
    toolbarIcon: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
  })
);

export function SideBar({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Links />
    </Drawer>
  );
}

export default SideBar;
