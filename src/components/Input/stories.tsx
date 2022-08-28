import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Component = Template.bind({});

Component.args = {
  label: 'Field name',
  helperText: 'Helper text',
  placeholder: 'This is an instruction in a field',
};
