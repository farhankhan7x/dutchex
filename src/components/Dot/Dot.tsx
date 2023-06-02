import React from "react";

interface DotProps {
  className?: string;
}

const Dot: React.FC<DotProps> = ({ className }) => {
  return (
    <div
      className={`h-[7px] w-[7px] bg-[white] rounded-[50%] ${className}`}
    ></div>
  );
};

export default Dot;
