import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: 'heading' | 'subheading' | 'body' | 'body-strong' | 'small' | 'code' | 'link' | 'price-large' | 'price-small';
  align?: 'start' | 'center' | 'end';
  color?: 'default' | 'secondary' | 'tertiary';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Text({
  as,
  variant = 'body',
  align,
  color = 'default',
  href,
  children,
  className,
  ...rest
}: TextProps & Record<string, unknown>) {
  const Tag = (as ?? 'p') as React.ElementType;

  const classNames = [
    styles.text,
    styles[`variant-${variant}`],
    align ? styles[`align-${align}`] : undefined,
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const props: Record<string, unknown> = { className: classNames, ...rest };
  if (href) {
    props.href = href;
  }

  return <Tag {...props}>{children}</Tag>;
}

export function Heading(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="h2" variant="heading" {...props} />;
}

export function Subheading(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="h3" variant="subheading" {...props} />;
}

export function BodyText(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="p" variant="body" {...props} />;
}

export function SmallText(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="span" variant="small" {...props} />;
}

export function CodeText(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="code" variant="code" {...props} />;
}

export function TextLink(props: Omit<TextProps, 'as' | 'variant'> & Partial<Pick<TextProps, 'as' | 'variant'>>) {
  return <Text as="a" variant="link" {...props} />;
}
