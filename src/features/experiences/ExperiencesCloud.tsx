import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import { useSelector } from "react-redux";
import { selectExperiencesWords, Word } from "./experiencesSlice";

export interface PureExperiencesCloudProps {
  words: Word[];
}

export function PureExperiencesCloud({ words }: PureExperiencesCloudProps) {
  return (
    <ReactWordcloud
      words={words}
      callbacks={{ getWordTooltip: (word) => word.text }}
    />
  );
}

export default function ExperiencesCloud() {
  const words = useSelector(selectExperiencesWords);
  return <PureExperiencesCloud words={words} />;
}
