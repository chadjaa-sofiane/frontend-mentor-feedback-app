export type props = {
  children: string;
  variant: "button1" | "button2" | "button3" | "button4";
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & props;

const classNames: Record<props["variant"], string> = {
  button1: "bg-primary-300 hover:bg-primary-200",
  button2: "bg-primary-300 hover:bg-primary-100",
  button3: "bg-secondary-300 hover:bg-secondary-100",
  button4: "bg-natural-300 hover:bg-natural-200",
};

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`
            text-white  py-3 px-8 rounded-md font-bold first-letter:uppercase font-primary
            ${classNames[variant]}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
