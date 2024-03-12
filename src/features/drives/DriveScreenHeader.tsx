import { Button, FilterButton, Input } from '$components';
import AddIcon from '$icons/add.svg?react';
import CalendarIcon from '$icons/calendar.svg?react';
import SliderHorizontalIcon from '$icons/sliders-horizontal.svg?react';

export const DriveScreenHeader = () => {
  return (
    <div className="flex flex-col gap-space16">
      <div className="flex justify-between">
        <h1 className="text-headingL-600">Drives</h1>
        <Button
          variant="primary"
          leftIcon={<AddIcon className="w-[20px] h-[20px]" />}
        >
          Add a drive
        </Button>
      </div>
      <div className="flex flex-row gap-space8">
        {/* TODO: transform this filter into a calendar filter component */}
        <FilterButton icon={<CalendarIcon />}>January</FilterButton>
        <FilterButton hideArrow icon={<SliderHorizontalIcon />}></FilterButton>
        <Input type="search" placeholder="Search" className="w-auto" />
      </div>
    </div>
  );
};
