import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export function Links() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItemLink href="https://github.com/illume/react-rene-resume-redux">
          <ListItemText primary="Code for this website GitHub" />
        </ListItemLink>
        <ListItemLink href="/storybook">
          <ListItemText primary="Storybook for this website" />
        </ListItemLink>
        <ListItemLink href="https://renesd.blogspot.com/">
          <ListItemText primary="My Blog" />
        </ListItemLink>
        <ListItemLink href="https://github.com/illume/">
          <ListItemText primary="My GitHub" />
        </ListItemLink>
      </List>
    </div>
  );
}

export default Links;
