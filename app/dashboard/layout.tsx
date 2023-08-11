import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      Dashboard
      {children}
    </body>
  );
};

export default DashboardLayout;
