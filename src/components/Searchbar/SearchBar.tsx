import SearchIcon from "@/Assets/SearchIcon";
import SlashIcon from "@/Assets/SlasIcon";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[21.6%] px-[10.5px] py-2 flex border justify-between items-center rounded-lg border-solid border-[rgba(255,255,255,0.1)]  ">
      <SearchIcon />
      <input
        className="shadow-none ring-0 font-normal text-sm text-[#FFFFFF] border-0 bg-none bg-transparent shadow-none w-[79.37%] border-[none]"
        placeholder="Enter name or ID"
        style={{ outline: "none" }}
      ></input>
      <SlashIcon />
    </div>
  );
};

export default SearchBar;
