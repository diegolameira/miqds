import { Button } from '@/components/buttons';

import ArrowICON from '@/icons/arrow-down-b.svg?react';
import CalendarICON from '@/icons/calender.svg?react';
import CloseICON from '@/icons/close.svg?react';

export function FilterButton({
  children = 'Filter',
  badge = 0,
  hideIcon = false,
  hideLabel = false,
  hideBadge = false,
  hideArrow = false,
  onClick = () => {},
  onClear = () => {},
  ...props
}) {
  const rightIcon = () => {
    if (badge > 0) {
      return <CloseICON onClick={onClear} />;
    }

    return !hideArrow && <ArrowICON />;
  };

  return (
    <Button
      isActive={!!badge}
      leftIcon={!hideIcon && <CalendarICON />}
      onClick={onClick}
      rightIcon={rightIcon()}
      variant="outline"
      {...props}
    >
      {!hideLabel && children}
      {!hideBadge && badge > 0 && <span className="font-body">{badge}</span>}
    </Button>
  );
}
