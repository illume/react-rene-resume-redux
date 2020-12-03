import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import PageLayout from "./PageLayout";
import { Links as LinksComponent } from "./Links";
import { SideBar as SideBarComponent } from "./SideBar";
import { TopNav as TopNavComponent } from "./TopNav";
import { Copyright as CopyrightComponent } from "./Copyright";

export default {
  title: "PageLayout",
  component: PageLayout,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => (
  <PageLayout {...args}>
    <p>a</p>
    <p>b</p>
    <p>c</p>
    <p>d</p>
    <p>e</p>
  </PageLayout>
);

const LinksTemplate: Story<{}> = (args) => <LinksComponent {...args} />;
const CopyrightTemplate: Story<{}> = (args) => <CopyrightComponent {...args} />;

const SideBarTemplate: Story<{
  open: boolean;
  toggleDrawer: () => void;
}> = (args) => <SideBarComponent {...args} />;
const TopNavTemplate: Story<{
  open: boolean;
  toggleDrawer: () => void;
}> = (args) => <TopNavComponent {...args} />;

export const Links = LinksTemplate.bind({});
export const Copyright = CopyrightTemplate.bind({});
export const SideBar = SideBarTemplate.bind({});
SideBar.args = {
  open: true,
};
export const TopNav = TopNavTemplate.bind({});
TopNav.args = {
  open: true,
};

export const EmptyPage = Template.bind({});
