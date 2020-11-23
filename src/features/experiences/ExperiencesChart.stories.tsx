import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PureExperiencesChart, PureExperiencesProps } from "./ExperiencesChart";

export default {
  title: "Example/ExperiencesChart",
  component: PureExperiencesChart,
} as Meta;

const Template: Story<{}> = (args) => <PureExperiencesChart {...args} />;

export const Chart = Template.bind({});
Chart.args = {
  // experiences: [
  //   {
  //     title: "Front end developer at Example Corp",
  //     body: "During my time at Example Corp, I did Y using Z.",
  //     tags: ["JavaScript", "TypeScript", "HighCharts", "2020"],
  //   },
  //   {
  //     title: "Back end developer at Acme Pty Ltd.",
  //     body: "During my time at Acme Pty Ltd., I did Y using Z.",
  //     tags: ["Node.js", "PostgreSQL", "Express", "2020", "2019"],
  //   },
  //   {
  //     title: "Fullstack developer at Example Solutions Corp.",
  //     body: "During my time at Example Solutions Corp, I did Y using Z.",
  //     tags: ["Python", "PostgreSQL", "pylint", "React", "2019"],
  //   },
  // ],
};
