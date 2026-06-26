import type { Meta, StoryObj } from '@storybook/react';
import { Text, Heading, Subheading, BodyText, SmallText, CodeText, TextLink } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading>Heading — The quick brown fox</Heading>
      <Subheading>Subheading — The quick brown fox</Subheading>
      <BodyText>Body — The quick brown fox jumps over the lazy dog</BodyText>
      <Text variant="body-strong">Body Strong — The quick brown fox jumps over the lazy dog</Text>
      <SmallText>Small — The quick brown fox jumps over the lazy dog</SmallText>
      <CodeText>const greeting = "hello world"</CodeText>
      <TextLink href="#">Text Link — Click here</TextLink>
      <Text variant="price-large">$99.00</Text>
      <Text variant="price-small">$9.99</Text>
    </div>
  ),
};

export const HeadingStory: Story = {
  name: 'Heading',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Heading>Default Heading</Heading>
      <Heading color="secondary">Secondary Heading</Heading>
      <Heading color="tertiary">Tertiary Heading</Heading>
      <Heading align="center">Centered Heading</Heading>
      <Heading align="end">End-aligned Heading</Heading>
    </div>
  ),
};

export const BodyStory: Story = {
  name: 'Body',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <BodyText>Default body text. The quick brown fox jumps over the lazy dog.</BodyText>
      <Text variant="body-strong">Strong body text. The quick brown fox jumps over the lazy dog.</Text>
      <BodyText color="secondary">Secondary body text. The quick brown fox jumps over the lazy dog.</BodyText>
      <BodyText color="tertiary">Tertiary body text. The quick brown fox jumps over the lazy dog.</BodyText>
      <SmallText>Small text used for captions or supporting content.</SmallText>
    </div>
  ),
};
