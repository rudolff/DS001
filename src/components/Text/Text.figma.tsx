import figma from '@figma/code-connect';
import { Text, Heading, Subheading, BodyText, SmallText, CodeText, TextLink } from './Text';

figma.connect(Text, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <Text>Body text content</Text>,
});

figma.connect(Heading, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <Heading>Heading text</Heading>,
});

figma.connect(Subheading, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <Subheading>Subheading text</Subheading>,
});

figma.connect(BodyText, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <BodyText>Body text</BodyText>,
});

figma.connect(SmallText, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <SmallText>Small text</SmallText>,
});

figma.connect(CodeText, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <CodeText>code snippet</CodeText>,
});

figma.connect(TextLink, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2087-8484', {
  props: {},
  example: () => <TextLink href="#">Link text</TextLink>,
});
