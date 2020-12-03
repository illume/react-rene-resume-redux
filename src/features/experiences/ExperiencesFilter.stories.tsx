import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  PureExperiencesFilter,
  PureExperiencesFilterProps,
} from "./ExperiencesFilter";

export default {
  title: "Experiences/Filter",
  component: PureExperiencesFilter,
} as Meta;

const Template: Story<PureExperiencesFilterProps> = (args) => (
  <PureExperiencesFilter {...args} />
);

export const Filter = Template.bind({});

Filter.args = {
  filteredTags: ["JavaScript"],
  tags: ["JavaScript", "TypeScript"],
  tagToggled: (tag) => {
    alert("You clicked the filter:" + tag);
  },
  numExperiences: 2,
  numFilteredExperiences: 2,
};
