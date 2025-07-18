import type { Meta, StoryObj } from '@storybook/react';
import { Badges, IconButton, BadgesVariant, BadgesColors } from '../../components';
import React from 'react';

const meta = {
    title: 'Components/Badges',
    component: Badges,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: '',
        style: {},
        content: "1",
        color: BadgesColors.Primary
    }
}

export const Secondary: Story = {
    args: {
        className: '',
        style: {},
        color: BadgesColors.Primary,
        variant: BadgesVariant.Dot
    }
}

export const Button: Story = {
    args: {
        className: '',
        style: {},
        color: BadgesColors.Primary,
        variant: BadgesVariant.Standard,
        content: "1",
        component: <IconButton onClick={() => {}} />
    }
}

export const ButtonWithDot: Story = {
    args: {
        className: '',
        style: {},
        color: BadgesColors.Primary,
        variant: BadgesVariant.Dot,
        component: <IconButton onClick={() => {}} />
    }
}