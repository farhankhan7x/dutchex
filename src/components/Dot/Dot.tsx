import React from "react";

interface DotProps {
  className?: string;
  bgColor?: any;
}

const Dot: React.FC<DotProps> = ({ className, bgColor }) => {
  return (
    <div
      className={`h-[7px] w-[7px] bg-[white] rounded-[50%] ${className}`}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
};

export default Dot;
