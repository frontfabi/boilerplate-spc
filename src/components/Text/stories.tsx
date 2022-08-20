import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from 'components';
import Standard from 'utils/theme';

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
    color: { control: 'select', options: Object.keys(Standard.font.color)},
    size: { control: 'select', options: Standard.font.size.map((item, index) => index)},
    lineHeight: { control: 'select', options: Standard.font.lineHeight.map((item, index) => index)},
    weight: { control: 'select', options: Standard.font.weight.map((item, index) => index)}
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Component = Template.bind({});

Component.args = {
  children: 'The args you need here will depend on your component'
};