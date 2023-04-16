import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import DropDown from './drop-down';



const meta = {
  title: 'animations/DropDown',
  component: DropDown,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
