import { ComponentStory, ComponentMeta } from '@storybook/react';
import Standard from 'utils/theme';
import { Button } from 'components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    btnStatus: { control: 'select', options: Object.keys(Standard.button)},
    btnStyle: { control: 'select', options: ['normal', 'outline', 'link']},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component'
};