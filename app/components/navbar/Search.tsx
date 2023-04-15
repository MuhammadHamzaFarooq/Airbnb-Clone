"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
function Search() {
  return (
    <div
      className="
        border-b-[1px]
        w-full
        py-2
        rounded-full
        shadow-sm
        transition
        cursor-pointer
         "
    >
      <div
        className="
    flex
    flex-row
    items-center
    justify-center
"
      >
        <div
          className="
    text-sm
    font-semibold
    px-6

    "
        >
          Anywhere
        </div>
        <div
          className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center
        "
        >
          Any Week
        </div>
        <div
          className="
            text-sm
            pl-6
            pr-2
            text-gray-50
            flex-row
            items-center
            gap-3
            
        "
        >
          <div
            className="
        hidden
        sm:block
        "
          >
            Add Guests
          </div>

          <div
            className="
          p-2
          bg-rose-500
          rounded-full
          text-white
          "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
