import {
  Badge,
  Checkbox,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '$components';
import BusinessIcon from '$icons/business.svg?react';
import CarIcon from '$icons/car.svg?react';
import ExclamationIcon from '$icons/exclamation-octagon.svg?react';
import PersonalIcon from '$icons/personal.svg?react';
import { Trans } from 'react-i18next';

export const DrivesTable = ({ drives, filters }) => {
  const totalFiltered = 60;
  const totalReported = 6;
  const showReportedDrives = false;
  const handleToggleShowReported = () => {};

  return (
    <div className="p-space20">
      <Tabs defaultValue="all" className="">
        <TabsList className="w-full flex justify-start border-b border-b-border">
          <TabsTrigger value="all">
            <CarIcon className="w-[20px] h-[20px]" />
            All Drives
            <Badge>60</Badge>
          </TabsTrigger>
          <TabsTrigger value="unclassified">
            <ExclamationIcon className="w-[20px] h-[20px]" />
            Unclassified
            <Badge>60</Badge>
          </TabsTrigger>
          <TabsTrigger value="business">
            <BusinessIcon className="w-[20px] h-[20px]" />
            Business
          </TabsTrigger>
          <TabsTrigger value="personal">
            <PersonalIcon className="w-[20px] h-[20px]" />
            Personal
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center justify-between px-[20px] laptop:px-[15px] h-[40px] flex-shrink-0">
          <div className="flex items-center">
            <label htmlFor="selectAll">
              <Checkbox id="selectAll" />
              <span className="mx-2 leading-none">
                <Trans
                  i18nKey="drives.selectAllMachingDrives"
                  count={totalFiltered}
                ></Trans>
              </span>
            </label>
            <span className="text-black/30 leading-none">•</span>
            <span className="mx-2 leading-none">
              <Trans
                i18nKey="drives.countReportedDrives"
                count={totalReported}
              ></Trans>
            </span>
            {totalReported > 0 ? (
              <span onClick={handleToggleShowReported}>
                <Trans
                  i18nKey={`drives.${showReportedDrives ? 'exclude' : 'include'}`}
                >
                  exclude/include
                </Trans>
              </span>
            ) : null}
          </div>
        </div>

        <TabsContent value="all">All drives are shown here.</TabsContent>
        <TabsContent value="unclassified">
          Unclassified drives are shown here.
        </TabsContent>
        <TabsContent value="business">
          Business drives are shown here.
        </TabsContent>
        <TabsContent value="personal">
          Personal drives are shown here.
        </TabsContent>
      </Tabs>
    </div>
  );
};
