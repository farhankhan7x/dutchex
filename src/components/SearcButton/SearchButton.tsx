import React from "react";

interface Props {
  ButtonText: any;
}
const SearchButton: React.FC<Props> = ({ ButtonText }) => {
  return (
    <div className="px-2  w-fit items-center justify-center rounded bg-[rgba(255,255,255,0.1)] cursor-pointer">
      <button className="font-satoshi font-bold text-xs leading-[18px] text-[rgba(255,255,255,0.5)]">
        {ButtonText}
      </button>
    </div>
  );
};

export default SearchButton;
