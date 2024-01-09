import * as React from 'react';
import { Input, type InputProps } from './input';

// NOTE: we should use something like alpine algorithem instead
// https://github.com/alpinejs/alpine/blob/main/packages/mask/src/index.js

export const CreditCardInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, ...props }, ref) => {
    const [value, setValue] = React.useState<any | null>();

    const fallbackRef = React.useRef<HTMLInputElement | null>();

    const domRef = ref || fallbackRef;

    const handleChange = React.useCallback(() => {
      if (domRef.current) {
        const cardValue = domRef.current.value
          .replace(/\D/g, '')
          .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

        if (cardValue) {
          domRef.current.value = !cardValue[2]
            ? cardValue[1]
            : `${cardValue[1]} ${cardValue[2]}${`${
                cardValue[3] ? ` ${cardValue[3]}` : ''
              }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
          const numbers = domRef.current.value.replace(/(\D)/g, '');

          setValue(numbers);
        }
      }
    }, [domRef]);

    React.useEffect(() => {
      handleChange();
    }, [value, handleChange]);

    return (
      <Input
        onChange={handleChange}
        ref={domRef}
        type="creditCard"
        {...props}
      />
    );
  }
);
