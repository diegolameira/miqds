import * as React from 'react';

import ClearICON from '$icons/clear.svg?react';
import EyeCrossedICON from '$icons/eye-cross.svg?react';
import EyeICON from '$icons/eye.svg?react';
import LockICON from '$icons/lock.svg?react';
import MailICON from '$icons/mail.svg?react';
import SearchICON from '$icons/search.svg?react';
import CreditCardICON from '$icons/subscription.svg?react';

import { cn } from '../../lib/utils';
import { Button } from '../buttons';
import { CurrencyUnitSelector } from '../currency-unity-selector';
import { FlagSelector } from '../flag-selector';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  type?: InputType | string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  value?: string;
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>,
  ) => void;
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
  (
    {
      className,
      type = InputType.Text,
      value: defaultValue = '',
      onChange = () => {},
      onClear = () => {},
      ...props
    },
    ref,
  ) => {
    const [isRevealed, setReveal] = React.useState(false);

    const [value, setValue] = React.useState<string>(defaultValue);

    // const innerRef = React.useRef<HTMLInputElement | null>();

    // const ref = _ref || innerRef;

    // Expose the value and setValue function to the parent component
    // React.useImperativeHandle(ref, () => ({
    //   clear: () => {
    //     setValue('');
    //   },
    //   value,
    //   setValue,
    // }));

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        setValue(val);
        onChange(val, e);
      },
      [onChange],
    );

    const handleClear = React.useCallback(() => {
      const val = '';

      setValue(val);
      onChange(val);
      onClear();
    }, [onChange, onClear]);

    React.useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);

    const toggleReveal = () => setReveal((a) => !a);

    let icon;

    let action;

    let computedType = type;

    if (Object.hasOwn(patterns, type)) {
      props.pattern = patterns[type as keyof typeof patterns];
    }

    switch (type) {
      case InputType.Search:
        icon = <SearchICON />;
        action = !props.disabled && (
          <Button
            iconOnly
            className={cn([
              `transition ${value ? 'opacity-100' : 'opacity-0'}`,
            ])}
            leftIcon={<ClearICON />}
            onClick={handleClear}
            variant="tertiary"
          />
        );
        break;
      case InputType.Email:
        props.placeholder = props.placeholder ?? 'Email address';
        icon = <MailICON />;
        break;
      case InputType.Password:
        props.placeholder = props.placeholder ?? 'Password';
        icon = <LockICON />;
        action = !props.disabled && (
          <Button
            iconOnly
            className={cn(['hover:!bg-transparent active:!bg-transparent'])}
            leftIcon={isRevealed ? <EyeCrossedICON /> : <EyeICON />}
            onClick={toggleReveal}
            variant="tertiary"
          />
        );
        break;
      case InputType.Price:
        icon = <span className="text-bodyM-500 text-tertiary">$</span>;
        props.placeholder = props.placeholder ?? '0.00';
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputMode = 'numeric';
        break;
      case InputType.PricePerDistance:
        action = (
          <CurrencyUnitSelector
            className={cn(['hover:!bg-transparent active:!bg-transparent'])}
          />
        );
        props.placeholder = props.placeholder ?? '0.0';
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputMode = 'numeric';
        break;
      case InputType.Distance:
        action = <span className="text-bodyM-500 mr-space12">mi</span>;
        props.placeholder = props.placeholder ?? '0.0';
        props.step = 0.01;
        props.min = 0;
        computedType = InputType.Number;
        props.inputMode = 'numeric';
        break;
      case InputType.CreditCard:
        icon = <CreditCardICON />;
        props.autoComplete = 'cc-number';
        props.maxLength = 19;
        props.placeholder = props.placeholder ?? '1234 1234 1234 1234';
        computedType = InputType.Tel;
        props.inputMode = 'numeric';
        break;
      case InputType.Number:
        props.placeholder = props.placeholder ?? '1';
        props.inputMode = 'numeric';
        break;
      case InputType.Tel:
        icon = (
          <FlagSelector
            className={cn(['hover:!bg-transparent active:!bg-transparent'])}
          />
        );
        props.placeholder = 'Phone number';
        props.inputMode = 'numeric';
        break;
      default:
        break;
    }

    return (
      <div className="flex flex-1 flex-col justify-center relative">
        {Boolean(icon) && (
          <div
            className={cn([
              'absolute inline-flex w-[20px] h-[20px] left-space12 justify-center items-center text-[hsla(var(--color-icon-default))]',
              type !== InputType.Tel && 'pointer-events-none',
              type === InputType.Tel &&
                'w-[auto] ml-[calc(var(--spacing-space12)/-1)]',
              type === InputType.Price && 'left-space8',
              props.disabled && 'opacity-60',
            ])}
          >
            {icon}
          </div>
        )}
        <div>
          <input
            className={cn(
              [
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed',

                'flex-row gap-space-4 px-space12 py-space8',
                'transition-shadow placeholder:text-[hsla(var(--text-tertiary))] text-[hsla(var(--color-text-primary))] border-[hsla(var(--color-border-default))] bg-[hsla(var(--color-surface-primary))]',
                'hover:border-[hsla(var(--color-border-medium))] focus-visible:border-[hsla(var(--color-border-active))] focus-visible:ring-border-active',
                'disabled:bg-[hsla(var(--color-surface-highlight))] disabled:!text-[hsla(var(--text-tertiary))] disabled:border-transparent',

                icon &&
                  (type === InputType.Tel
                    ? 'pl-space64'
                    : type === InputType.Price
                      ? 'pl-[28px]'
                      : 'pl-space40'),

                action && 'pr-space48',
                type === InputType.Number &&
                  '[appearance:number] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto',
              ],
              className,
            )}
            onChange={handleChange}
            ref={ref}
            type={isRevealed ? 'text' : computedType}
            value={value}
            {...props}
          />
        </div>
        {Boolean(action) && (
          <div
            className={cn([
              'absolute inline-flex h-[20px] right-0 justify-center items-center text-[hsla(var(--color-icon-default))]',
              type === InputType.Distance && 'pointer-events-none',
              props.disabled && 'opacity-60',
            ])}
          >
            {action}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
