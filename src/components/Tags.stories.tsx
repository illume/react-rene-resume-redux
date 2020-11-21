import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tags, { TagsProps } from "./Tags";

export default {
  title: "Example/Tags",
  component: Tags,
} as Meta;

const Template: Story<TagsProps> = (args) => <Tags {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  selectedTags: ["JavaScript"],
  tags: ["JavaScript", "TypeScript"],
  tagClicked: (tag) => {
    alert("You clicked the tag:" + tag);
  },
};
