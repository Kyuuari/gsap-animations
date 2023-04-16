import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ScrollMarquee from './scroll-marquee';

// import { Page } from '../components/examples/page/Page';

const meta = {
  title: 'animations/Scroll-Marquee',
  component: ScrollMarquee,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
