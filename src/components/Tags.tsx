import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

interface callbackType {
  (tag: string): void;
}

export interface TagsProps {
  tags: string[];
  selectedTags: string[];
  tagClicked: callbackType;
}

export default function Tags({ tags, selectedTags, tagClicked }: TagsProps) {
  const classes = useStyles();

  return (
    <Paper component="ul" className={classes.root}>
      {tags &&
        tags.map((value, index) => {
          const color:
            | "default"
            | "primary"
            | "secondary"
            | undefined = selectedTags.includes(value) ? "primary" : undefined;
          return (
            <li key={index}>
              <Chip
                className={classes.chip}
                label={value}
                color={color}
                onClick={() => tagClicked(value)}
              />
            </li>
          );
        })}
    </Paper>
  );
}
