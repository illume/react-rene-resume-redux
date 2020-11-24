import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { selectExperiencesIntro } from "./experiencesSlice";

export interface PureExperiencesIntroProps {
  intro: string;
}

export function PureExperiencesIntro({ intro }: PureExperiencesIntroProps) {
  return <Typography>{intro}</Typography>;
}

export default function ExperiencesIntro() {
  const intro = useSelector(selectExperiencesIntro);
  return <PureExperiencesIntro intro={intro} />;
}
