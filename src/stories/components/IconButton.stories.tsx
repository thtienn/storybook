import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, IconButtonColors} from '../../components/IconButton';
import { Size, State } from '@/types';

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
    args: {
        color: IconButtonColors.Primary,
        size: Size.Medium,
        className: '',
        style: {},
        state: State.Enabled,
        onClick: () => {}
    },
};