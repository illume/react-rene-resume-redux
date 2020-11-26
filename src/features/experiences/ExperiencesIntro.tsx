import React from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import { selectExperiencesIntro } from "./experiencesSlice";

export interface PureExperiencesIntroProps {
  intro: string;
}

export function PureExperiencesIntro({ intro }: PureExperiencesIntroProps) {
  return (
    <Typography>
      <Markdown>{intro}</Markdown>
    </Typography>
  );
}

export default function ExperiencesIntro() {
  const intro = useSelector(selectExperiencesIntro);
  return <PureExperiencesIntro intro={intro} />;
}
