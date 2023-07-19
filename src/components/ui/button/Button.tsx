export type props = {
  children: string;
  variant: "button1" | "button2" | "button3" | "button4" | "transparent";
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & props;

const classNames: Record<props["variant"], string> = {
  button1: "text-white bg-primary-300 hover:bg-primary-200",
  button2: "text-white bg-primary-300 hover:bg-primary-100",
  button3: "text-white bg-secondary-300 hover:bg-secondary-100",
  button4: "text-white bg-natural-300 hover:bg-natural-200",
  transparent: "text-secondary-300 hover:bg-secondary-200 hover:text-white",
};

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`
           py-3 px-8 rounded-md font-bold first-letter:uppercase font-primary
          ${classNames[variant]}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
