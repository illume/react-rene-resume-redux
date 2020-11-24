import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PureTestimonials, PureTestimonialsProps } from "./Testimonials";

export default {
  title: "Testimonials/List",
  component: PureTestimonials,
} as Meta;

const Template: Story<PureTestimonialsProps> = (args) => (
  <PureTestimonials {...args} />
);

export const List = Template.bind({});
List.args = {
  testimonials: [
    {
      name: "Jane",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla. Suspendisse porta turpis non eros viverra, non posuere eros consequat.",
    },
    {
      name: "Blenadsd Asdfgwe",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla. Suspendisse porta turpis non eros viverra, non posuere eros consequat.",
    },
    {
      name: "Qweryty Zxcvb",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla. Suspendisse porta turpis non eros viverra, non posuere eros consequat.",
    },
  ],
};
