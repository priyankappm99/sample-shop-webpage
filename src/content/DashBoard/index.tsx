import React from 'react';
import BusinessSegmentGraph from '../../components/charts/BusinessSegmentGraph';
import WorkOrderGraph from '../../components/charts/WorkOrderGraph';

// Define the props interface
interface DashBoardProps {
  
}

// Define the component
const DashBoard: React.FC<DashBoardProps> = ({  }) => {
  return (
    <div>
      <WorkOrderGraph/>
      <BusinessSegmentGraph/>
    </div>
  );
};

export default DashBoard;
