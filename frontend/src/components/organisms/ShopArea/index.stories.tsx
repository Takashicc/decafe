import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShopArea } from ".";

export default {
  title: "Design System/Organisms/ShopArea",
  component: ShopArea,
} as ComponentMeta<typeof ShopArea>;

const Template: ComponentStory<typeof ShopArea> = (args) => (
  <ShopArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
