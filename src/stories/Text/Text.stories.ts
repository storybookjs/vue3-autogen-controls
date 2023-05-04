import type { Meta, StoryObj } from "@storybook/vue3";

import Text from "./Text.vue";


const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Text }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
        <Text :tag="args.tag" > {{ args.default}} </Text>
    `,
  }),
  args: {
    default: "this is text",
    tag: "h1",
  }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Heading1: Story = {
  args: {
    default: "This a h1 text",
    tag: "h1",
  },
};
export const Paragraph: Story = {
  args: {
    default: "This a normal Paragraph",
    tag: "p",
  },
};
export const ParagraphBold: Story = {
  args: {
    default: "This a bold Paragraph",
    tag: "p_bold",
  },
};
