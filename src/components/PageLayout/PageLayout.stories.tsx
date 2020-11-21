import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import PageLayout from "./PageLayout";

export default {
  title: "PageLayout",
  component: PageLayout,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => <PageLayout {...args} />;

export const EmptyPage = Template.bind({});
EmptyPage.args = {};
