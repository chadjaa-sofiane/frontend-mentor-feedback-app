import React, { useState, useRef, useId } from "react";
import ArrowIcon from "@/public/svgs/up.svg";
import CheckIcon from "@/public/svgs/check.svg";

type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  title: React.ReactNode;
};

type HandleSelectChange = (e: React.FormEvent<HTMLFormElement>) => void;

const Select = ({ options, onChange, title }: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState(options[0].label);
  const id = useId();
  // const blur = (e: React.MouseEvent<HTMLDivElement>) =>{
  //   const element = e.currentTarget
  //   if(document.activeElement == element) {
  //     element.blur()
  //   }
  // }

  const handleSelectChange: HandleSelectChange = (e) => {
    const selectedValue = (e.target as HTMLInputElement).value;
    onChange(selectedValue);
    setLabel(options.find((o) => o.value === selectedValue)?.label || label);
    selectRef?.current?.blur();
  };

  return (
    <>
      <div
        ref={selectRef}
        tabIndex={-1}
        className="relative w-fit cursor-pointer group"
      >
        <div className="flex items-center bg-secondary-300 text-white px-6 py-5 rounded-md gap-2">
          {title}: <p className="font-bold">{label}</p>
          <ArrowIcon
            className={`[&>path]:stroke-white mt-1 transition-all  group-focus:rotate-180`}
          />
        </div>
        <div className="absolute top-[90%] shadow-md cursor-pointer opacity-0 invisible transition-all duration-100 group-focus-within:visible group-focus:opacity-100 group-focus:top-[100%]">
          <form onChange={handleSelectChange}>
            {options.map((option) => (
              <Option
                key={option.value}
                name={id}
                label={option.label}
                value={option.value}
              />
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

type OptionProps = {
  name: string;
  label: string;
  value: string;
};

const Option = ({ name, label, value }: OptionProps) => {
  const id = useId();
  return (
    <label htmlFor={id}>
      <div className="w-64 mt-4 flex justify-between py-3 px-6 text-secondary-100 cursor-pointer">
        <input
          type="radio"
          name={name}
          id={id}
          hidden
          className="peer"
          value={value}
        />
        <div className="text-secondary-100 hover:text-primary-200">{label}</div>
        <div className="hidden peer-checked:block">
          <CheckIcon />
        </div>
      </div>
    </label>
  );
};

export default Select;
