type TextFieldProps = {
  placeholder?: string;
  error?: string;
  onChange: (vaule: string) => void;
};

const TextField = ({
  placeholder = "",
  error,
  onChange = () => {},
}: TextFieldProps) => {
  return (
    <div tabIndex={0} className="bg-[#F7F8FD] w-fit outline-none flex flex-col">
      <input
        className={`
        bg-transparent outline-none py-3 px-6  focus:border-[1px] text-secondary-300 rounded-md 
        ${error ? "border-natural-300 border-[1px]" : "border-primary-300"}
        `}
        type="text"
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      <p className="text-natural-300 mt-1"> {error} </p>
    </div>
  );
};

export default TextField;
