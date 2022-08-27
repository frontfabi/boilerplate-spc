import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from 'components';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component',
};
