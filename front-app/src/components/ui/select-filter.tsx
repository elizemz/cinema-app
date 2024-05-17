"use client";

import React, { useContext, useRef } from "react";
import Select, { OnChangeValue } from "react-select";
import { MovieContext } from "..";

interface CinemaTypeOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const cinemaTypeOptions: readonly CinemaTypeOption[] = [
  { value: "2D", label: "2D", color: "#00B8D9", isFixed: false },
  { value: "3D", label: "3D", color: "#0052CC", isDisabled: false },
  { value: "IMAX", label: "IMAX", color: "#5243AA" },
  { value: "LASER", label: "LASER", color: "#FF5630", isFixed: false },
];

const controlStyles = {
  base: " rounded-md bg-slate-900 hover:bg-slate-800 py-1 h-12 min-w-40 text-[10px] sm:text-[12px] lg:text-base ",
  focus: "border-primary-400 ",
  nonFocus: "border-gray-800 hover:border-gray-400 py-1",
};
const placeholderStyles = "text-slate-500  pl-2 py-1 font-normal ";
const selectInputStyles = "pl-1 py-0.5 ";
const valueContainerStyles = "p-1 gap-1  text-slate-400";
const singleValueStyles = "leading-7 pl-2 text-slate-500";
const multiValueStyles =
  "rounded items-center px-1 py-0.5 gap-1.5 text-white text-xs lg:text-sm bg-red-500";
const multiValueLabelStyles = "leading-6 py-0.5 text-nowrap";
const dropdownIndicatorStyles =
  "p-1 text-gray-500 rounded-md hover:text-black ";
const menuStyles =
  "p-1 mt-2 text-slate-400 border-gray-200 bg-slate-900 rounded-lg p-2 ";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm ";
const optionStyles = "bg-green hover:bg-slate-800 p-2 rounded-md";

export const MultiSelect = () => {
  const { setFilterByScreenType, setFilterByCinema, allFilteredMovies } =
    useContext(MovieContext);
  const selectRef = useRef<any>(null);
  const selectRef1 = useRef<any>(null);
  const selectRef2 = useRef<any>(null);

  const handleChange = (selectedOptions: any) => {
    const optionsArray = selectedOptions as (typeof Option)[];
    setFilterByScreenType(optionsArray);
    console.log(optionsArray, "clicked");
    allFilteredMovies();
  };
  const handleChangeCinema = (selectedOptions: any) => {
    const optionsObject = selectedOptions as typeof Option;
    setFilterByCinema(optionsObject);
    console.log(optionsObject, "clicked");
    allFilteredMovies();
  };

  const handleClear = () => {
    selectRef.current.clearValue();
    selectRef1.current.clearValue();
    setFilterByCinema({});
    setFilterByScreenType([]);
  };
  return (
    <div className="flex sm:flex-row">
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <Select
          isMulti
          name="cinema"
          options={cinemaTypeOptions}
          ref={selectRef}
          onChange={handleChange}
          placeholder="Танхимын төрөл"
          unstyled
          classNames={{
            control: ({ isFocused }) =>
              isFocused
                ? `${controlStyles.focus} ${controlStyles.base}`
                : `${controlStyles.nonFocus} ${controlStyles.base}`,
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            multiValue: () => multiValueStyles,
            multiValueLabel: () => multiValueLabelStyles,

            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,

            option: () => optionStyles,
          }}
        />
        <Select
          options={cinemasNameOption}
          unstyled
          ref={selectRef1}
          name="cinemas"
          placeholder="Кино театр"
          onChange={handleChangeCinema}
          classNames={{
            control: ({ isFocused }) =>
              isFocused
                ? `${controlStyles.focus} ${controlStyles.base}`
                : `${controlStyles.nonFocus} ${controlStyles.base}`,
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            multiValue: () => multiValueStyles,
            multiValueLabel: () => multiValueLabelStyles,

            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            groupHeading: () => groupHeadingStyles,

            option: () => optionStyles,
          }}
        />
        <button
          className="bg-slate-800 hover:bg-red-500 w-24 h-8 sm:h-12 rounded-md text-xs sm:text-sm lg:text-base text-slate-400 hover:text-white sm:ml-2"
          onClick={handleClear}
        >
          Арилгах
        </button>
      </div>
    </div>
  );
};

interface CinemasOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const cinemasNameOption: readonly CinemasOption[] = [
  {
    value: "660692f73de61589e3b1f3ff",
    label: "Өргөө",
    color: "#00B8D9",
    isFixed: false,
  },
  {
    value: "660692f73de61589e3b1f400",
    label: "Өргөө-2 IT парк",
    color: "#0052CC",
    isDisabled: false,
  },
  {
    value: "660692f73de61589e3b1f401",
    label: "Өргөө 3 IMAX Шангри-Ла Төв",
    color: "#0052CC",
    isDisabled: false,
  },
  {
    value: "660692f73de61589e3b1f402",
    label: "Өргөө 4 Эрдэнэт хот",
    color: "#0052CC",
    isDisabled: false,
  },
  {
    value: "660692f73de61589e3b1f403",
    label: "Өргөө 5 Laser Cinema",
    color: "#0052CC",
    isDisabled: false,
  },
  {
    value: "660692f73de61589e3b1f404",
    label: "Өргөө 6 Дархан хот",
    color: "#0052CC",
    isDisabled: false,
  },
  {
    value: "660692f73de61589e3b1f405",
    label: "Өргөө 7 Парк-Од Молл",
    color: "#0052CC",
    isDisabled: false,
  },
  { value: "660692f73de61589e3b1f407", label: "Тэнгис", color: "#5243AA" },
  {
    value: "660692f73de61589e3b1f40f",
    label: "Гэгээнтэн",
    color: "#FF5630",
    isFixed: false,
  },
  {
    value: "660692f73de61589e3b1f40d",
    label: "Хүннү",
    color: "#FF5630",
    isFixed: false,
  },
  {
    value: "660692f73de61589e3b1f409",
    label: "Prime Cineplex 1",
    color: "#FF5630",
    isFixed: false,
  },
  {
    value: "660692f73de61589e3b1f40a",
    label: "Prime Cineplex 2",
    color: "#FF5630",
    isFixed: false,
  },
  {
    value: "660692f73de61589e3b1f40b",
    label: "Prime Cineplex 3",
    color: "#FF5630",
    isFixed: false,
  },
];

export const SelectCinema = () => {
  const { setFilterByCinema } = useContext(MovieContext);
  const handleChange = (selectedOptions: any) => {
    const optionsObject = selectedOptions as typeof Option;
    setFilterByCinema(optionsObject);
    console.log(optionsObject, "clicked");
  };
  return (
    <Select
      options={cinemasNameOption}
      unstyled
      name="cinemas"
      placeholder="кино театр"
      onChange={handleChange}
      classNames={{
        control: ({ isFocused }) =>
          isFocused
            ? `${controlStyles.focus} ${controlStyles.base}`
            : `${controlStyles.nonFocus} ${controlStyles.base}`,
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,

        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,

        option: () => optionStyles,
      }}
    />
  );
};
