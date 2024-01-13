import * as React from 'react';

import { Button } from '@/components/buttons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';

import USAFlag from '@/flags/USA.svg?react';
import CAFlag from '@/flags/ca.svg?react';
import UKFlag from '@/flags/uk.svg?react';
import ArrowDownICON from '@/icons/arrow-down.svg?react';
import { cn } from '@/lib/utils';

const FlagSelectorOptions = [
  {
    label: 'United States (+1)',
    value: 'US',
    icon: USAFlag,
  },
  {
    label: 'Canada (+1)',
    value: 'CA',
    icon: CAFlag,
  },
  {
    label: 'United Kingdom (+44)',
    value: 'UK',
    icon: UKFlag,
  },
];

function FlagSelector({ className, onChange = () => {} }) {
  const [selected, setSelected] = React.useState(FlagSelector.options[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          iconOnly
          className={cn([
            '!pr-space4 !pl-space12 !gap-space2 w-[62px] min-w-[auto]',
            className,
          ])}
          leftIcon={<selected.icon />}
          rightIcon={<ArrowDownICON />}
          size="sm"
          variant="tertiary"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {FlagSelector.options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => {
              setSelected(option);
              onChange(option.value);
            }}
          >
            <option.icon />
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

FlagSelector.displayName = 'FlagSelector';
FlagSelector.options = FlagSelectorOptions;

export { FlagSelector };
