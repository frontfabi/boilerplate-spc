import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Header} from 'components';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Component = Template.bind({});

Component.args = {
  loggedIn: true,
  username: 'Paulo Gonçalves',
  cpf: '764.235.853-14',
};
