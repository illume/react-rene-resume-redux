import React from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { selectFilteredExperiences, Experience } from "./experiencesSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    root: {
      // display: "flex",
      // padding: theme.spacing(2),
      // marginBottom: theme.spacing(2),
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
  })
);

export interface PureExperiencesProps {
  experiences: Experience[];
}

export function PureExperiences({ experiences }: PureExperiencesProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {experiences &&
        experiences.map((experience, index) => {
          return (
            <Grid item xs={12} md={6}>
              <Card
                className={classes.root}
                key={experience.title + experience.subtitle}
              >
                {experience.image && (
                  <CardMedia
                    className={classes.cover}
                    image={experience.image}
                    title={experience.title}
                  />
                )}
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {experience.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {experience.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      <Markdown>{experience.body}</Markdown>
                    </Typography>
                    <Tags tags={experience.tags} />
                  </CardContent>
                </div>
              </Card>
            </Grid>
          );
        })}
    </Grid>
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
