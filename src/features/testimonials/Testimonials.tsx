import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";

import { selectTestimonials, Testimonial } from "./testimonialsSlice";

const useStyles = makeStyles((theme) => ({
  paper: {},
  blockquote: {
    fontSize: "0.8rem",
    fontWeight: 100,
    lineHeight: 1.4,
    margin: 0,
    // maxWidth: "600px",
    // minHeight: "160px",
    padding: "1.5rem",
    position: "relative",

    "&::before": {
      color: "#f1efe6",
      content: "'“'",
      fontSize: "4rem",
      height: "2rem",
      left: "0rem",
      position: "absolute",
      top: "-1rem",
      width: "2rem",
    },
    "&::after": {
      bottom: "1rem",
      color: "#f1efe6",
      content: "'”'",
      fontSize: "4rem",
      height: "2rem",
      position: "absolute",
      right: "0rem",
      width: "2rem",
    },
  },
  cite: {
    display: "inherit",
    lineHeight: 3,
    fontWeight: 100,
    // maxWidth: "600px",
    // minHeight: "160px",
    textAlign: "right",
  },
}));

export interface PureTestimonialsProps {
  testimonials: Testimonial[];
}

export function PureTestimonials({ testimonials }: PureTestimonialsProps) {
  const classes = useStyles();

  return (
    <Carousel interval={10000}>
      {testimonials &&
        testimonials.map((value, index) => {
          return (
            <Paper className={classes.paper} key={value.quote}>
              <Typography component="blockquote" className={classes.blockquote}>
                {value.quote}
              </Typography>
              <Typography component="cite" className={classes.cite}>
                &mdash;{value.name}
              </Typography>
            </Paper>
          );
        })}
    </Carousel>
  );
}

export default function Testimonials() {
  const testimonials = useSelector(selectTestimonials);
  return <PureTestimonials testimonials={testimonials} />;
}
