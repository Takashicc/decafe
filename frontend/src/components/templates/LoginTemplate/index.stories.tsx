import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginTemplate } from "./";

export default {
  title: "Design System/Templates/LoginTemplate",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
