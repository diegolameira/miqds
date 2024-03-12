import { Button, ButtonProps } from '$components/buttons';
import { cn } from '$lib/utils';
import * as React from 'react';

export interface NavButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ icon, onClick = () => {}, className, ...props }, ref) => {
    return (
      <Button
        align="left"
        className={cn(['font-bodyM-400', className])}
        leftIcon={icon}
        onClick={onClick}
        ref={ref}
        variant="tertiary"
        {...props}
      />
    );
  },
);

NavButton.displayName = 'NavButton';

export { NavButton };
