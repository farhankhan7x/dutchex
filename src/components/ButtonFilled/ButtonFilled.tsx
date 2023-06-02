import React from "react";

interface Props {
  ButtonText: any;
}
const ButtonFilled: React.FC<Props> = ({ ButtonText }) => {
  return (
    <div className="px-4 py-2 w-fit mr-2 rounded-lg border-solid border-[1px] bg-white">
      <button className="font-satoshi font-bold text-base leading-6 text-[#121212]">
        {ButtonText}
      </button>
    </div>
  );
};

export default ButtonFilled;
