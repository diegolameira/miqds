import { DashboardLayout } from '$features/navigation/layout';
import { DriveScreenHeader } from './DriveScreenHeader';
import { DrivesTable } from './DrivesTable';

const DrivesScreen = () => {
  return (
    <DashboardLayout title="Drives" header={<DriveScreenHeader />}>
      <DrivesTable />
    </DashboardLayout>
  );
};

export { DrivesScreen };
