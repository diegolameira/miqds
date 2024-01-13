import * as React from 'react';

import { Button } from '@/components/buttons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';

import ArrowDownICON from '@/icons/arrow-down.svg?react';

import { cn } from '@/lib/utils';

const CurrencyUnitOptions = [
  {
    label: '$/mi',
    value: 'US',
  },
  {
    label: 'CAD/km',
    value: 'CA',
  },
  {
    label: '£/mi',
    value: 'UK',
  },
];

function CurrencyUnitSelector({
  className,
  align = 'end',
  onChange = () => {},
}) {
  const [selected, setSelected] = React.useState(
    CurrencyUnitSelector.options[0]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          children={selected.label}
          className={cn([
            '!text-bodyS-500 !pr-space4 !pl-space12 !gap-space2',
            className,
          ])}
          rightIcon={<ArrowDownICON />}
          variant="tertiary"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {CurrencyUnitSelector.options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => {
              setSelected(option);
              onChange(option.value);
            }}
          >
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

CurrencyUnitSelector.displayName = 'CurrencyUnitSelector';
CurrencyUnitSelector.options = CurrencyUnitOptions;

export { CurrencyUnitSelector };
