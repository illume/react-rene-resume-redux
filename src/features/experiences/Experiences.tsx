import React from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import { selectFilteredExperiences, Experience } from "./experiencesSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflow: "auto",
  },
  tags: {
    display: "flex",
    justifyContent: "right",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(2),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
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
        experiences.map((experience, index) => {
          return (
            <Paper className={classes.paper} key={experience.title}>
              <Typography variant="h5">{experience.title}</Typography>
              <Typography>
                <Markdown>{experience.body}</Markdown>
              </Typography>
              <Tags tags={experience.tags} />
            </Paper>
          );
        })}
    </React.Fragment>
  );
}

function Tags({ tags }: { tags: string[] }) {
  const classes = useStyles();
  return (
    <ul className={classes.tags}>
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            <Chip
              label={tag}
              size="small"
              variant="outlined"
              className={classes.chip}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function Experiences() {
  const experiences = useSelector(selectFilteredExperiences);
  return <PureExperiences experiences={experiences} />;
}
