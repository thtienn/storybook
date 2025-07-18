import { Meta, StoryObj } from '@storybook/react';
import { Typography, TypoVariant } from '../../../components/Typography';

const meta: Meta<typeof Typography> = {
    title: 'Instances/Data-displays/Typo',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    args: {
        variant: TypoVariant.H1,
        content: 'This is a custom typo',
        className: '',
    },
};