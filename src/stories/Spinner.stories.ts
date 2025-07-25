import type { Meta, StoryObj } from '@storybook/nextjs'

import { Spinner } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'neutral', 'danger'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Spinner',
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}

export const Secondary: Story = { args: { theme: 'secondary' } }
export const Success: Story = { args: { theme: 'success' } }
export const Neutral: Story = { args: { theme: 'neutral' } }
export const Danger: Story = { args: { theme: 'danger' } }

export const Small: Story = { args: { size: 'sm' } }
export const Medium: Story = { args: { size: 'md' } }
export const Large: Story = { args: { size: 'lg' } }
