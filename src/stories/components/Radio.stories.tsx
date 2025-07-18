import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioColors} from '../../components';
import {  State } from '@/types';

const meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
    args: {
        className: '',
        style: {},
    },
};