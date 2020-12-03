import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  PureExperiencesChart,
  PureExperiencesChartProps,
} from "./ExperiencesChart";

export default {
  title: "Experiences/Chart",
  component: PureExperiencesChart,
} as Meta;

const Template: Story<PureExperiencesChartProps> = (args) => (
  <PureExperiencesChart {...args} />
);

export const Chart = Template.bind({});
Chart.args = {
  tags: ["JavaScript", "TypeScript"],
  experiences: [
    {
      title: "Front end developer at Example Corp",
      subtitle: "Example Corp",
      image: "",
      body: "During my time at Example Corp, I did Y using Z.",
      tags: ["JavaScript", "TypeScript", "HighCharts", "2020"],
    },
    {
      title: "Back end developer",
      subtitle: "Acme Pty Ltd.",
      image: "",
      body: "During my time at Acme Pty Ltd., I did Y using Z.",
      tags: ["Node.js", "PostgreSQL", "Express", "2020", "2019"],
    },
    {
      title: "Fullstack developer",
      subtitle: "Example Solutions Corp",
      image: "",
      body: "During my time at Example Solutions Corp, I did Y using Z.",
      tags: ["Python", "PostgreSQL", "pylint", "React", "2019"],
    },
  ],
};
