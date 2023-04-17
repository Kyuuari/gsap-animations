import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ScrollMarquee from './scroll-marquee';

const meta = {
  title: 'animations/Scroll-Marquee',
  component: ScrollMarquee,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ScrollMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
