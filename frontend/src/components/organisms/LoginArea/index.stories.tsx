import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginArea } from "./";

export default {
  title: "Design System/Organisms/LoginArea",
  component: LoginArea,
} as ComponentMeta<typeof LoginArea>;

const Template: ComponentStory<typeof LoginArea> = (args) => (
  <LoginArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
