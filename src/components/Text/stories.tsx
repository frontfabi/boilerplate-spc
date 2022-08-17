import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from 'components';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    tag: { control: 'select', options: ['span', 'p', 'h2', 'h3', 'h4', 'h5', 'strong']},
    color: { control: 'select', options: ['text', 'title']},
    size: { control: 'select', options: [0,1,2,3,4,5]},
    lineHeight: { control: 'select', options: [0,1,2,3,4]},
    weight: { control: 'select', options: [0,1,2,3,4]}
  },
} as ComponentMeta<typeof Text>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component'
};