import figma from '@figma/code-connect';
import { IconButton } from './IconButton';

figma.connect(IconButton, 'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=11-11508', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Neutral: 'neutral',
      Subtle: 'subtle',
    }),
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: ({ variant, size, disabled }) => (
    <IconButton
      variant={variant}
      size={size}
      disabled={disabled}
      icon={<span>★</span>}
      label="Icon button"
    />
  ),
});
