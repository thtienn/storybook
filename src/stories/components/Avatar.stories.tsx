import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components/Avatar/Avatar/Avatar'; 

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'md',
    type: 'circular',
    variant: 'text',
    content: 'AB',
    badge: false,
    className: '',
    style: {},
  },
};