import ArrowIcon from "@/public/svgs/up.svg";
import CheckIcon from "@/public/svgs/check.svg";
import { useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type DropDownProps = {
  options: Option[];
  onChange: (value: string) => void
};

const DropDown = ({ options, onChange }: DropDownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("features");
  const handleClick = (value: string, offsetTop: number) => {
    setActive(value);
    onChange(value)
    if (ref?.current) {
      ref.current.style.top = `${-offsetTop}px`;
    }
  };

  return (
    <div className="relative w-64 h-20 mt-7 ">
      <div
        ref={ref}
        tabIndex={-2}
        className="absolute w-fit cursor-pointer rounded-md group focus:shadow-md [&>*:nth-child(n+2)]:border-t-[1px]"
        style={{
          transition: "top 100ms",
          top: 0,
        }}
      >
        {options.map((option) => (
          <Option
            handleClick={handleClick}
            key={option.value}
            label={option.label}
            value={option.value}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

type OptionProps = {
  active: string;
  label: string;
  value: string;
  handleClick: (value: string, offsetTop: number) => void;
};

const Option = ({ label, value, active, handleClick }: OptionProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isActive = active === value;
  return (
    <div
      className={`
        transition-all duration-75 w-64 flex justify-between items-center py-3 px-6 bg-[#F7F8FD] border-transparent group-focus:border-primary-300 group-focus:border-opacity-10
        ${
          isActive
            ? "pointer-events-none cursor-auto"
            : "invisible group-focus:visible"
        }
        `}
      ref={divRef}
      onClick={() => handleClick(value, divRef?.current?.offsetTop || 0)}
    >
      <p> {label} </p>
      <div>
        <ArrowIcon
          className={`
            transition-opacity  rotate-180
            ${
              isActive
                ? "opacity-100 group-focus:invisible group-focus:opatiy-0"
                : "opacity-0"
            }
        `}
        />
        <CheckIcon
          className={`
            transition-opacity opacity-0 invisible 
            ${isActive ? "group-focus:visible group-focus:opacity-100" : ""}
        `}
        />
      </div>
    </div>
  );
};

export default DropDown;
