import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from 'components';

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component',
  fluid: true,
};
