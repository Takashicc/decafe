import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "email",
  placeHolder: "Enter your email",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "email",
  placeHolder: "Enter your email",
  variant: "outline",
};
