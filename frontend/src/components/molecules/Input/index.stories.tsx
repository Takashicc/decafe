import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./";

export default {
  title: "Design System/Molecules/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "email",
  id: "email",
  label: "Email Address",
  placeHolder: "Enter your email",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "email",
  id: "email",
  label: "Email Address",
  placeHolder: "Enter your email",
  variant: "outline",
};
