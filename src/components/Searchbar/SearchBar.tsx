import SearchIcon from "@/Assets/SearchIcon";
import SlashIcon from "@/Assets/SlasIcon";
import React, { useState } from "react";
import SearchButton from "../SearcButton/SearchButton";

const SearchBar = () => {
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);

  const handleSearchBar = () => {
    setOpenSearchBar((prevState) => !prevState);
  };
  return (
    <div className="w-[26.17%] relative">
      <div className="w-[100%] px-[10.5px] py-2 flex border justify-between items-center rounded-lg border-solid border-[rgba(255,255,255,0.1)]  ">
        <SearchIcon />
        <input
          className="shadow-none ring-0 font-normal text-sm text-[#FFFFFF] border-0 bg-none bg-transparent shadow-none w-[79.37%] border-[none]"
          placeholder="Enter name or ID"
          style={{ outline: "none" }}
          onClick={() => handleSearchBar()}
        ></input>
        <SlashIcon />
      </div>
      {openSearchBar && (
        <div className="w-[100%] flex h-[74px] items-center absolute mt-[5.5px] pl-6 pr-4 py-2 flex border justify-between items-center rounded-lg bg-[rgba(255,255,255,0.1)] border-solid border-[rgba(255,255,255,0.1)] backdrop-blur-[48px]  ">
          <div className="flex w-[78.55%] flex-col">
            <span className="font-satoshi font-normal text-xs leading-[18px] text-[rgba(255,255,255,0.6)]">
              Press enter to search for{" "}
            </span>
            <span className="font-satoshi font-bold text-base mt-1  leading-6 text-[#FFFFFF]">
              {" "}
              0xb6...e462
            </span>
          </div>
          <div>
            <SearchButton ButtonText={"Enter"}></SearchButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
