import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'components';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Component = Template.bind({});

Component.args = {
  title: 'Modal title',
  children: 'Modal content',
  isOpen: true,
  primaryActionButton: {
    action: () => console.log('Confirmou')
  },
  secondaryActionButton: {
    action: () => console.log('Cancelou')
  }
};