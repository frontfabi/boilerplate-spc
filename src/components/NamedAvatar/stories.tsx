import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NamedAvatar } from "components";

export default {
  title: "NamedAvatar",
  component: NamedAvatar,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof NamedAvatar>;

const Template: ComponentStory<typeof NamedAvatar> = (args) => (
  <NamedAvatar {...args} />
);

export const Component = Template.bind({});

Component.args = {
  name: "Lorem lorem ipsum",
};
