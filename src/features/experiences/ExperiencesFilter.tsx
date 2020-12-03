import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  selectTags,
  selectFilteredTags,
  toggleFilterTag,
  selectExperiences,
  selectFilteredExperiences,
} from "./experiencesSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    tags: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
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
  numExperiences: number;
  numFilteredExperiences: number;
}

export const PureExperiencesFilter = ({
  tags,
  filteredTags,
  tagToggled,
  numExperiences,
  numFilteredExperiences,
}: PureExperiencesFilterProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h5" variant="h5">
        Experiences ({numFilteredExperiences} of {numExperiences})
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Select the tags of experiences you want to see, or see them all.
      </Typography>

      <ul className={classes.tags}>
        {tags &&
          tags.map((value, index) => {
            const color:
              | "default"
              | "primary"
              | "secondary"
              | undefined = filteredTags.includes(value)
              ? "primary"
              : undefined;
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
      </ul>
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
      numExperiences={useSelector(selectExperiences).length}
      numFilteredExperiences={useSelector(selectFilteredExperiences).length}
    />
  );
}
