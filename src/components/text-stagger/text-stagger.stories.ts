import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import TextStagger from './text-stagger';


const meta = {
  title: 'animations/TextStagger',
  component: TextStagger,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextStagger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '"not all those who wander are lost"',
  },
};
