import React from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { selectFilteredExperiences, Experience } from "./experiencesSlice";

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
            <Paper className={classes.paper} key={value.title}>
              <Typography variant="h5">{value.title}</Typography>
              <Typography>
                <Markdown>{value.body}</Markdown>
              </Typography>
            </Paper>
          );
        })}
    </React.Fragment>
  );
}

export default function Experiences() {
  const experiences = useSelector(selectFilteredExperiences);
  return <PureExperiences experiences={experiences} />;
}
