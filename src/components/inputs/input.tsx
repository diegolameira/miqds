import * as React from 'react';

import USA from '@/flags/USA.svg?react';
import ArrowDownICON from '@/icons/arrow-down.svg?react';
import ClearICON from '@/icons/clear.svg?react';
import EyeCrossedICON from '@/icons/eye-cross.svg?react';
import EyeICON from '@/icons/eye.svg?react';
import LockICON from '@/icons/lock.svg?react';
import MailICON from '@/icons/mail.svg?react';
import SearchICON from '@/icons/search.svg?react';
import CreditCardICON from '@/icons/subscription.svg?react';

import { cn } from '../../lib/utils';
import { Button } from '../buttons';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClear?: () => void;
}

export enum InputType {
  Search = 'search',
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
  Tel = 'tel',
  // Custom
  Price = 'price',
  Distance = 'distance',
  PricePerDistance = 'pricePerDistance',
  CreditCard = 'creditCard',
}

const patterns = {
  [InputType.Price]: '[0-9]+([.][0-9]+)?',
  [InputType.Distance]: '[0-9]+([.][0-9]+)?',
  [InputType.CreditCard]: '[0-9s]{13,19}',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onClear, ...props }, ref) => {
    const [isRevealed, setReveal] = React.useState(false);

    const toggleReveal = () => setReveal((a) => !a);

    let icon;

    let action;

    let computedType = type;

    const pattern = patterns[type as InputType];

    if (pattern) {
      props.pattern = pattern;
    }

    switch (type) {
      case InputType.Search:
        icon = <SearchICON />;
        action = onClear && !props.disabled && (
          <Button
            iconOnly
            leftIcon={<ClearICON />}
            onClick={onClear}
            variant="tertiary"
          />
        );
        break;
      case InputType.Email:
        icon = <MailICON />;
        break;
      case InputType.Password:
        icon = <LockICON />;
        action = !props.disabled && (
          <Button
            iconOnly
            leftIcon={isRevealed ? <EyeCrossedICON /> : <EyeICON />}
            onClick={toggleReveal}
            variant="tertiary"
          />
        );
        break;
      case InputType.Price:
        icon = <span className="text-bodyM-500">$</span>;
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputmode = 'numeric';
        break;
      case InputType.PricePerDistance:
        action = (
          <Button
            className="!text-bodyS-500 !pr-space4 !pl-space12 !gap-space2"
            rightIcon={<ArrowDownICON />}
            variant="tertiary"
          >
            $/mi
          </Button>
        );
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputmode = 'numeric';
        break;
      case InputType.Distance:
        action = <span className="text-bodyM-500 mr-space12">mi</span>;
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputmode = 'numeric';
        break;
      case InputType.CreditCard:
        icon = <CreditCardICON />;
        props.autocomplete = 'cc-number';
        props.maxlength = '19';
        props.placeholder = 'xxxx xxxx xxxx xxxx';
        computedType = InputType.Tel;
        props.inputmode = 'numeric';
        break;
      case InputType.Number:
        props.inputmode = 'numeric';
        break;
      case InputType.Tel:
        icon = (
          <Button
            iconOnly
            className="!pr-space4 !pl-space12 !gap-space2 w-[auto] min-w-[auto] ml-[calc(var(--spacing-space12)/-1)]"
            leftIcon={<USA />}
            rightIcon={<ArrowDownICON />}
            size="sm"
            variant="tertiary"
          />
        );
        props.inputmode = 'numeric';
        break;
      default:
        break;
    }

    return (
      <div className="flex flex-1 flex-col justify-center relative">
        {Boolean(icon) && (
          <div className="absolute inline-flex min-w-[20px] h-[20px] left-space12 justify-center items-center text-[hsla(var(--color-icon-default))]">
            {icon}
          </div>
        )}
        <div>
          <input
            className={cn(
              [
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed',

                'flex-row gap-space-4 px-space12 py-space8',
                'transition-all placeholder:text-[hsla(var(--text-tertiary))] text-[hsla(var(--color-text-primary))] border-[hsla(var(--color-border-default))] bg-[hsla(var(--color-surface-primary))]',
                'hover:border-[hsla(var(--color-border-medium))] focus-visible:border-[hsla(var(--color-border-active))] focus-visible:ring-border-active',
                'disabled:bg-[hsla(var(--color-surface-highlight))] disabled:!text-[hsla(var(--text-tertiary))] disabled:border-0',

                icon && (type === InputType.Tel ? 'pl-space64' : 'pl-space40'),
                action && 'pr-space48',
              ],
              className
            )}
            ref={ref}
            type={isRevealed ? 'text' : computedType}
            {...props}
          />
        </div>
        {Boolean(action) && (
          <div className="absolute inline-flex h-[20px] right-0 justify-center items-center text-[hsla(var(--color-icon-default))]">
            {action}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
