import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShopCreateTemplate } from "./";

export default {
  title: "Design System/Templates/ShopCreateTemplate",
  component: ShopCreateTemplate,
} as ComponentMeta<typeof ShopCreateTemplate>;

const Template: ComponentStory<typeof ShopCreateTemplate> = (args) => (
  <ShopCreateTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
