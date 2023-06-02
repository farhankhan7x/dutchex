import React from "react";

interface Props {
  ButtonText: any;
}
const Button: React.FC<Props> = ({ ButtonText }) => {
  return (
    <div className="px-4 py-2 w-fit  rounded-lg border-solid border-[1px] border-white">
      <button className="font-satoshi font-normal text-base leading-6 text-white">
        {ButtonText}
      </button>
    </div>
  );
};

export default Button;
