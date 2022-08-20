import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormField } from 'components';

export default {
  title: 'FormField',
  component: FormField,
  argTypes: {
    children: { control: 'text' },
    helperText: { control: 'text' },
    label: { control: 'text' },
  },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component',
  status: 'success',
  label: 'Component name',
  helperText: 'This text helps the user to handle forms'
};