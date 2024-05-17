"use client";

import { MultiSelect, SelectCinema } from "@/components/ui/select-filter";
import React, { useContext, useRef } from "react";
import { ImLocation } from "react-icons/im";

const FilterSection = () => {
  return (
    <div className="flex md:flex-row gap-4 md:gap-0 items-center mx-auto mt-4 md:mt-12 md:mb-8 justify-center">
      <MultiSelect />
    </div>
  );
};

export default FilterSection;
