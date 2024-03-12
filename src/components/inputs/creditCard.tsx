import * as React from 'react';
import { Input, InputType, type InputProps } from './input';

// NOTE: we should use something like alpine algorithem instead
// https://github.com/alpinejs/alpine/blob/main/packages/mask/src/index.js

const CreditCardInput = ({
  value: defaultValue = '',
  onChange = () => {},
  ...props
}: InputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const handleChange = React.useCallback(
    (val: string) => {
      const cardValue = val
        .replace(/\D/g, '')
        .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

      if (cardValue && inputRef.current) {
        inputRef.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]} ${cardValue[2]}${`${
              cardValue[3] ? ` ${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
        const numbers = inputRef.current?.value.replace(/(\D)/g, '');

        inputRef.current.value = numbers;
        onChange(numbers);
      }
    },
    [inputRef, onChange],
  );

  React.useEffect(() => {
    handleChange(defaultValue);
  }, [defaultValue, handleChange]);

  return (
    <Input
      onChange={handleChange}
      ref={inputRef}
      type={InputType.CreditCard}
      {...props}
    />
  );
};

CreditCardInput.displayName = 'CreditCardInput';

export { CreditCardInput };
