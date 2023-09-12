import React, { ReactNode } from "react";

interface ChartLayoutProps {
  children: ReactNode;
}

const ChartLayout: React.FC<ChartLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 gap-10">
      <div className="w-5/6">{children}</div>
    </div>
  );
};

export default ChartLayout;
