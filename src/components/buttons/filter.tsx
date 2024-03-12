import { Button, ButtonProps } from '$components/buttons';
import * as React from 'react';

import CloseICON from '$icons/close.svg?react';

export interface FilterButtonProps extends ButtonProps {
  badge?: number;
  hideArrow?: boolean;
  icon?: React.ReactNode;
  onClear?: () => void;
}

const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
  (
    {
      children = 'Filter',
      badge = 0,
      icon,
      hideArrow = false,
      onClick = () => {},
      onClear = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <Button
        isActive={!!badge}
        leftIcon={icon}
        onClick={onClick}
        ref={ref}
        rightIcon={badge > 0 && <CloseICON onClick={onClear} />}
        showArrow={!hideArrow && !badge}
        variant="outline"
        {...props}
      >
        {children}
        {badge > 0 && <span className="font-body">{badge}</span>}
      </Button>
    );
  }
);

FilterButton.displayName = 'FilterButton';

export { FilterButton };
