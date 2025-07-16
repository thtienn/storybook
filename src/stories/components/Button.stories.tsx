import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonColors } from '../../components/Button';
import { Variant, Size, State } from '@/types';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: Variant.Contained,
        color: ButtonColors.Primary,
        size: Size.Medium,
        className: '',
        style: {},
        state: State.Enabled
    },
};