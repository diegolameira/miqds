import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import ArrowICON from '@/icons/arrow-down-b.svg?react';
import PersonalICON from '@/icons/personal.svg?react';
import Spinner from '@/icons/spinner.svg?react';
import SuitcaseICON from '@/icons/suitcase.svg?react';

import { cn } from '../../lib/utils';

const variants = {
  variant: {
    primary:
      'bg-primary !text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed disabled:bg-primary-disabled disabled:!text-primary-foreground-disabled',
    secondary:
      'bg-secondary !text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-pressed disabled:bg-secondary-disabled disabled:!text-secondary-foreground-disabled',
    tertiary:
      'bg-tertiary !text-tertiary-foreground hover:bg-tertiary-hover active:bg-tertiary-pressed disabled:bg-tertiary-disabled disabled:!text-tertiary-foreground-disabled',
    destructive:
      'bg-destructive !text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-pressed disabled:bg-destructive-disabled disabled:!text-destructive-foreground-disabled',
    outline:
      'transition-shadow bg-outline !text-outline-foreground hover:bg-outline-hover active:bg-outline-pressed disabled:bg-outline-disabled disabled:!text-outline-foreground-disabled shadow-filterButton-shadow-default hover:shadow-filterButton-shadow-hover',
    link: 'text-primary underline-offset-4 hover:underline',
    business:
      'w-full bg-business !text-business-foreground hover:bg-business-hover active:bg-business-pressed disabled:bg-business-disabled disabled:!text-business-foreground-disabled',
    personal:
      'w-full bg-personal !text-personal-foreground hover:bg-personal-hover active:bg-personal-pressed disabled:bg-personal-disabled disabled:!text-personal-foreground-disabled',
  },
  iconOnly: {
    true: 'w-auto min-w-[32px] min-h-[32px]',
    false: '',
  },
  showArrow: {
    true: '!justify-between align-left',
    false: '',
  },
  isActive: {
    true: '',
    false: '',
  },
  loading: {
    true: '',
    false: '',
  },
  disabled: {
    true: '',
    false: '',
  },
  full: {
    true: 'w-full',
    false: '',
  },
  size: {
    default:
      'text-bodyS-500 px-space16 py-space6 md:text-bodyM-500 md:px-space20 md:py-space8',
    md: 'text-bodyM-500 px-space20 py-space8',
    sm: 'text-bodyS-500 px-space16 py-space6',
    icon: 'h-10 w-10',
  },
};

const buttonVariants = cva(
  [
    'inline-flex items-center font-display gap-space8 rounded-radiiM font-semibold ring-offset-background transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
  ],
  {
    variants,
    compoundVariants: [
      {
        variant: 'tertiary',
        isActive: true,
        className: 'bg-tertiary-hover',
      },
      {
        variant: 'outline',
        isActive: true,
        className:
          'shadow-filterButton-shadow-hover disabled:shadow-filterButton-shadow-default',
      },
      {
        size: 'default',
        iconOnly: true,
        className: '!p-space6 md:!p-space8',
      },
      {
        full: true,
        size: 'default',
        className: '!py-space8 md:!py-space12',
      },
      {
        full: true,
        size: 'md',
        className: '!py-space12',
      },
      {
        full: true,
        size: 'sm',
        className: '!py-space8',
      },
      {
        variant: 'primary',
        loading: true,
        className:
          'bg-primary-pressed disabled:bg-primary-pressed disabled:!text-primary-foreground',
      },
      {
        variant: 'secondary',
        loading: true,
        className:
          'bg-secondary-pressed disabled:bg-secondary-pressed disabled:!text-secondary-foreground',
      },
      {
        variant: 'tertiary',
        loading: true,
        className:
          'bg-tertiary-pressed disabled:bg-tertiary-pressed disabled:!text-tertiary-foreground',
      },
      {
        variant: 'destructive',
        loading: true,
        className:
          'bg-destructive-pressed disabled:bg-destructive-pressed disabled:!text-destructive-foreground',
      },
      {
        variant: 'business',
        loading: true,
        className:
          'bg-business-pressed disabled:bg-business-pressed disabled:!text-business-foreground',
      },
      {
        variant: 'personal',
        loading: true,
        className:
          'bg-personal-pressed disabled:bg-personal-pressed disabled:!text-personal-foreground',
      },
      {
        variant: 'destructive',
        iconOnly: true,
        className:
          'bg-tertiary !text-destructive hover:bg-tertiary-hover active:bg-tertiary-pressed disabled:bg-tertiary-disabled disabled:!text-destructive disabled:opacity-60',
      },
      {
        variant: 'destructive',
        loading: true,
        iconOnly: true,
        className: 'text-tertiary disabled:!text-tertiary disabled:opacity-100',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
);

export const ButtonVariantsKeys = Object.entries(variants).reduce(
  (acc, [key, value]) => {
    acc[key] = Object.keys(value);

    return acc;
  },
  {} as { [key: string]: string[] }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  full?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  align?: 'center' | 'left' | 'right';
  size?: 'default' | 'sm' | 'md' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      iconOnly,
      loading,
      disabled = loading,
      align = 'center',
      size = 'default',
      asChild = false,
      showArrow,
      children,
      isActive,
      full,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    let { leftIcon, rightIcon, ...rest } = props;

    let label = children;

    if (variant === 'personal') {
      leftIcon = <PersonalICON />;
      label = label || 'Personal';
    }

    if (variant === 'business') {
      leftIcon = <SuitcaseICON />;
      label = label || 'Business';
    }

    if (showArrow) {
      rightIcon = <ArrowICON />;
    }

    return (
      <Comp
        className={cn([
          buttonVariants({
            variant,
            size,
            iconOnly,
            loading,
            disabled,
            full,
            showArrow,
            // className,
            isActive,
          }),
          align === 'center'
            ? 'justify-center'
            : align === 'left'
              ? 'justify-left'
              : 'justify-end',
          leftIcon &&
            !iconOnly &&
            (size === 'sm'
              ? 'pl-space12'
              : size === 'md'
                ? 'pl-space16'
                : 'pl-space12 md:pl-space16'),
          rightIcon &&
            !iconOnly &&
            (size === 'sm'
              ? 'pr-space12'
              : size === 'md'
                ? 'pr-space16'
                : 'pr-space12 md:pr-space16'),
          className,
        ])}
        disabled={disabled || loading}
        ref={ref}
        {...rest}
      >
        <>
          {loading && (
            <>
              <span className={cn('w-[20px] absolute animate-spin')}>
                <Spinner />
              </span>
              <span className="sr-only">Loading...</span>
            </>
          )}
          {leftIcon && (
            <i
              className={cn([
                loading && 'invisible',
                iconOnly ? 'w-[22px] h-[22px]' : 'w-[20px] h-[20px]',
              ])}
            >
              {leftIcon}
            </i>
          )}
          <span
            className={cn([
              loading && 'invisible',
              iconOnly && 'sr-only',
              'inline-flex items-baseline gap-2 align-middle',
              showArrow && 'flex-1',
            ])}
          >
            {label}
          </span>
          {rightIcon && (
            <i
              className={cn([
                loading && 'invisible',
                iconOnly ? 'w-[22px] h-[22px]' : 'w-[20px] h-[20px]',
              ])}
            >
              {rightIcon}
            </i>
          )}
        </>
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
