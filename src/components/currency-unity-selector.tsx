import * as React from 'react';

import { Button } from '$components/buttons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '$components/dropdown-menu';

import ArrowDownICON from '$icons/arrow-down.svg?react';

import { cn } from '$lib/utils';

type CurrencyUnitOption = {
  label: string;
  value: string;
};

const CurrencyUnitOptions: CurrencyUnitOption[] = [
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

export interface CurrencyUnitySelectorProps {
  align?: 'start' | 'end';
  className?: string;
  onChange?: (value: string) => void;
}

const CurrencyUnitSelector = ({
  align = 'end',
  className,
  onChange = () => {},
}: CurrencyUnitySelectorProps) => {
  const [selected, setSelected] = React.useState(CurrencyUnitOptions[0]);

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
        {CurrencyUnitOptions.map((option) => (
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
};

export { CurrencyUnitSelector };
