import figma from '@figma/code-connect'
import { Avatar } from './Avatar'

figma.connect(
  Avatar,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-1103',
  {
    props: {
      type: figma.enum('Type', { Initial: 'initial', Image: 'image' }),
      size: figma.enum('Size', { Large: 'large', Medium: 'medium', Small: 'small' }),
      shape: figma.enum('Shape', { Circle: 'circle', Square: 'square' }),
    },
    example: ({ type, size, shape }) => (
      <Avatar type={type} size={size} shape={shape} />
    ),
  }
)
