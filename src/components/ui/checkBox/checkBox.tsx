import React, { useEffect, useId, useState } from "react";
import UpIcon from "@/public/svgs/up.svg"

type CheckBoxProps = {
  label: number | string;
  upVote: (checked?: boolean) => void;
  checked?: boolean;
  renderIcon?: (checked: boolean) => React.ReactNode;
};

const CheckBox = ({
  label,
  upVote,
  checked: iniitchecked = false,
  renderIcon = () => null,
}: CheckBoxProps) => {
  const [checked, setchecked] = useState(iniitchecked);
  useEffect(() => {
    upVote?.(checked);
  }, [checked]);
  const id = useId();
  return (
    <div>
      <input
        type="checkbox"
        hidden={true}
        onChange={(e) => setchecked(e.target.checked)}
        id={id}
      />
      <label
        htmlFor={id}
        className={`\
      text-primary-300 w-10 flex flex-col items-center gap-2 rounded-xl px-3 py-2 cursor-pointer
      transition-colors duration-100
      ${
        checked
          ? "bg-primary-300 text-white"
          : "text-secondary-300  hover:bg-[#CFD7FF]"
      }
      `}
      >
        {renderIcon(checked)}
        <span className="font-bold text-[13px]">{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
