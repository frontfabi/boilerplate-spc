import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AvatarDropdown} from 'components';

export default {
  title: 'AvatarDropdown',
  component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Component = Template.bind({});

Component.args = {
  title: 'Paulo Gonçalves',
  subtitle: '191.000.000-00',
  menu: [{label: 'Sair', url: '/'}],
};
