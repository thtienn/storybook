import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../../components/Alert'; 

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200px', padding: '0'}}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Information: Story = {
  args: {
    title: 'Alert Title',
    message: 'This is an alert message.',
    type: 'info',
    onClose: () => console.log('Alert closed'),
    onClick: () => console.log('Alert clicked'),
    className: 'custom-alert',
    position:'top-left',
    label: 'LABEL',
    animation: 'fade-out-left',
    autoDismissDuration: 1000,
  },
};

export const Success: Story = {
  args: {
    message: 'This is a success alert message.',
    type: 'success',
    // onClose: () => console.log('Success alert closed'),
    onClick: () => console.log('Success alert clicked'),
    className: 'custom-alert-success',
    label: 'UNDO',
    position: 'top-left'
  },
}; 

export const Warning: Story = {
  args: {
    message: 'This is a warning alert message.',
    type: 'warning',
    onClose: () => console.log('Warning alert closed'),
    onClick: () => console.log('Warning alert clicked'),
    className: 'custom-alert-warning',
    label: 'UNDO',
    position: 'top-left'
  },
};

export const Error: Story = {
  args: {
    message: 'This is an error alert message.',
    type: 'error',
    onClose: () => console.log('Error alert closed'),
    onClick: () => console.log('Error alert clicked'),
    className: 'custom-alert-error',
    label: 'UNDO',
    position: 'top-left'
  },
};