import * as React from 'react';
import { Input, InputType, type InputProps } from './input';

// NOTE: we should use something like alpine algorithem instead
// https://github.com/alpinejs/alpine/blob/main/packages/mask/src/index.js

const CreditCardInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, value: defaultValue = '', onChange = () => {}, ...props },
    _ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement | null>();

    const ref = _ref || innerRef;

    const handleChange = React.useCallback(
      (val: string) => {
        const cardValue = val
          .replace(/\D/g, '')
          .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

        if (cardValue) {
          ref.current.value = !cardValue[2]
            ? cardValue[1]
            : `${cardValue[1]} ${cardValue[2]}${`${
                cardValue[3] ? ` ${cardValue[3]}` : ''
              }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
          const numbers = ref.current.value.replace(/(\D)/g, '');

          ref.current.setValue(ref.current.value);
          onChange(numbers);
        }
      },
      [ref, onChange]
    );

    React.useEffect(() => {
      handleChange(defaultValue);
    }, [defaultValue, handleChange]);

    return (
      <Input
        onChange={handleChange}
        ref={ref}
        type={InputType.CreditCard}
        {...props}
      />
    );
  }
);

CreditCardInput.displayName = 'CreditCardInput';

export { CreditCardInput };
