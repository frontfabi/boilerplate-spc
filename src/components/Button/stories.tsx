import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'Entrar'
};