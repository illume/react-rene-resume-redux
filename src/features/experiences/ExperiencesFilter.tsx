import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

import {
  selectTags,
  selectFilteredTags,
  toggleFilterTag,
} from "./experiencesSlice";

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

export interface PureExperiencesFilterProps {
  tags: string[];
  filteredTags: string[];
  tagToggled: callbackType;
}

export const PureExperiencesFilter = ({
  tags,
  filteredTags,
  tagToggled,
}: PureExperiencesFilterProps) => {
  const classes = useStyles();

  return (
    <Paper component="ul" className={classes.root}>
      {tags &&
        tags.map((value, index) => {
          const color:
            | "default"
            | "primary"
            | "secondary"
            | undefined = filteredTags.includes(value) ? "primary" : undefined;
          return (
            <li key={index}>
              <Chip
                className={classes.chip}
                label={value}
                color={color}
                onClick={() => tagToggled(value)}
              />
            </li>
          );
        })}
    </Paper>
  );
};

export default function ExperiencesFilter() {
  const dispatch = useDispatch();
  return (
    <PureExperiencesFilter
      tags={useSelector(selectTags)}
      tagToggled={(tag) => {
        dispatch(toggleFilterTag(tag));
      }}
      filteredTags={useSelector(selectFilteredTags)}
    />
  );
}
