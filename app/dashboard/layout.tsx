import { SidebarLightDashboard } from '@components/dasboards/SidebarLightDashboard';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarLightDashboard />
      {children}
    </>
  );
};

export default DashboardLayout;
