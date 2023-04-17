import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import DropDown from './drop-down';



const meta = {
  title: 'animations/DropDown',
  component: DropDown,
  parameters: {
    layout: 'fullscreen',
    
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
