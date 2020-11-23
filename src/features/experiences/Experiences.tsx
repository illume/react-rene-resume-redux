import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { selectExperiences, Experience } from "./experiencesSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflow: "auto",
  },
}));

export interface PureExperiencesProps {
  experiences: Experience[];
}

export function PureExperiences({ experiences }: PureExperiencesProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {experiences &&
        experiences.map((value, index) => {
          return (
            <Paper className={classes.paper}>
              <Typography variant="h4">{value.title}</Typography>
              <Typography>{value.body}</Typography>
            </Paper>
          );
        })}
    </React.Fragment>
  );
}

export default function Experiences() {
  const experiences = useSelector(selectExperiences);
  return <PureExperiences experiences={experiences} />;
}
