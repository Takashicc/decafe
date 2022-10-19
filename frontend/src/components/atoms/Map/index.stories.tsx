import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Map } from "./";

export default {
  title: "Design System/Atoms/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  latitude: 35.6603976,
  longitude: 139.7292361,
  address: "ヒルズ ウェストウォーク",
};
