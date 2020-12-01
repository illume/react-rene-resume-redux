import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";

import { selectTestimonials, Testimonial } from "./testimonialsSlice";

const useStyles = makeStyles((theme) => ({
  blockquote: {
    fontSize: "0.9rem",
    fontWeight: 100,
    lineHeight: 1.2,
    margin: 0,
    paddingLeft: "1.5rem",
    paddingRight: "0",
    paddingTop: "1.5rem",
    // paddingBottom: "0rem",
    position: "relative",

    "&::before": {
      color: "black",
      content: "'“'",
      fontSize: "2.5rem",
      fontWeight: "bold",
      height: "1rem",
      left: "-0.1rem",
      position: "absolute",
      top: "-0rem",
      width: "2rem",
    },
  },
  cite: {
    display: "inherit",
    lineHeight: 2,
    fontWeight: 100,
    paddingRight: "0.8rem",
    textAlign: "right",
  },

  testimonial: {
    // overflowX: "hidden",
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: 10,
    }),
    // width: theme.spacing(0),
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(0),
    // },
  },
}));

export interface PureTestimonialsProps {
  testimonials: Testimonial[];
}

export function PureTestimonials({ testimonials }: PureTestimonialsProps) {
  const classes = useStyles();

  return (
    <Carousel interval={10000} className={classes.testimonial}>
      {testimonials &&
        testimonials.map((value, index) => {
          return (
            <div key={value.quote} className={classes.testimonial}>
              <Typography component="blockquote" className={classes.blockquote}>
                {value.quote}
              </Typography>
              <Typography component="cite" className={classes.cite}>
                &mdash;&nbsp;{value.name}
              </Typography>
            </div>
          );
        })}
    </Carousel>
  );
}

export default function Testimonials() {
  const testimonials = useSelector(selectTestimonials);
  return <PureTestimonials testimonials={testimonials} />;
}
