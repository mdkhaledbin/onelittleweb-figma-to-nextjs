import React from "react";
import { twMerge } from "tailwind-merge";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("max-w-12/14 mx-auto px-4 py-4", className)}>
      {children}
    </div>
  );
};

export default Wrapper;