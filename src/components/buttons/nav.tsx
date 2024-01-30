import { Button, ButtonProps } from '@/components/buttons';
import * as React from 'react';

export interface NavButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ icon, onClick = () => {}, ...props }, ref) => {
    return (
      <Button
        align="left"
        className="font-bodyM-400"
        leftIcon={icon}
        onClick={onClick}
        ref={ref}
        variant="tertiary"
        {...props}
      />
    );
  }
);

NavButton.displayName = 'NavButton';

export { NavButton };
