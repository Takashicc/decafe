import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./";
import { CiLogin } from "react-icons/ci";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Login",
};

export const Loading = Template.bind({});
Loading.args = {
  text: "Login",
  isLoading: true,
};

export const Large = Template.bind({});
Large.args = {
  text: "Login",
  size: "lg",
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Login",
  variant: "outline",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  text: "Login",
  leftIcon: <CiLogin />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  text: "Login",
  rightIcon: <CiLogin />,
};

export const BothIcon = Template.bind({});
BothIcon.args = {
  text: "Login",
  leftIcon: <AiOutlineArrowLeft />,
  rightIcon: <AiOutlineArrowRight />,
};
