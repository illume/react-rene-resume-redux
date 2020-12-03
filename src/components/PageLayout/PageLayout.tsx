import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import TopNav from "./TopNav";
import Copyright from "./Copyright";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      backgroundColor: theme.palette.grey[100],
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      overflow: "auto",
    },
    root: {
      display: "flex",
    },
  })
);

interface PageLayoutProps {
  children?: JSX.Element[];
}

export default function PageLayout(props: PageLayoutProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopNav open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                {props.children && props.children[0]}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                {props.children && props.children[1]}
              </Paper>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={9} lg={9}>
                <Paper className={classes.paper}>
                  {props.children && props.children[2]}
                </Paper>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={classes.paper}>
                {props.children && props.children[3]}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              {props.children && props.children[4]}
            </Grid>
          </Grid>
          <Box mt={3}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
