import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignUpArea } from ".";

export default {
  title: "Design System/Organisms/SignUpArea",
  component: SignUpArea,
} as ComponentMeta<typeof SignUpArea>;

const Template: ComponentStory<typeof SignUpArea> = (args) => (
  <SignUpArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
