import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from ".";

export default {
  title: "Stats-Preview/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: {
    mobile: `${process.env.PUBLIC_URL}/assets/image-header-mobile.jpg`,
    desktop: `${process.env.PUBLIC_URL}/assets/image-header-mobile.jpg`,
  },
  title: "This **unique string** is strong",
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit facilis, eaque
         ullam sequi saepe? Enim officiis, eius labore aliquam alias qui vero, sint fugit quidem
         odit iure maiores ab! Quibusdam accusamus et, enim nihil aliquam tempora id aut fuga`,
  list: [
    ["4k", "Loris"],
    ["200", "Missions"],
    ["20+", "Volumes"],
  ],
};
