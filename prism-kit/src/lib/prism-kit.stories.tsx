import type { Meta, StoryObj } from '@storybook/react';
import { PrismKit } from './prism-kit';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PrismKit> = {
  component: PrismKit,
  title: 'PrismKit',
};
export default meta;
type Story = StoryObj<typeof PrismKit>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PrismKit!/gi)).toBeTruthy();
  },
};
