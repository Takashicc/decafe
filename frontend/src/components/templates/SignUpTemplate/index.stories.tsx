import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignUpTemplate } from ".";

export default {
  title: "Design System/Templates/SignUpTemplate",
  component: SignUpTemplate,
} as ComponentMeta<typeof SignUpTemplate>;

const Template: ComponentStory<typeof SignUpTemplate> = (args) => (
  <SignUpTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
