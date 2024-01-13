import { Button } from '@/components/buttons';

import CloseICON from '@/icons/close.svg?react';

function FilterButton({
  children = 'Filter',
  badge = 0,
  icon,
  hideArrow = false,
  onClick = () => {},
  onClear = () => {},
  ...props
}) {
  return (
    <Button
      isActive={!!badge}
      leftIcon={icon}
      onClick={onClick}
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

FilterButton.displayName = 'FilterButton';

export { FilterButton };
