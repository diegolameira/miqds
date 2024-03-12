import Check from '$icons/check.svg?react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { cn } from '$lib/utils';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checked?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, checked: defaultChecked, onCheckedChange, ...props }, ref) => {
  const [checked, setChecked] = React.useState<boolean>(!!defaultChecked);

  const handleCheckedChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    onCheckedChange?.(nextChecked);
  };

  React.useEffect(() => {
    setChecked(!!defaultChecked);
  }, [defaultChecked]);

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer shrink-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        'peer h-[20px] w-[20px] relative bg-white rounded-radiiXS shadow-md border boder-primary',
        className,
      )}
      checked={checked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-[15px] w-[15px]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
